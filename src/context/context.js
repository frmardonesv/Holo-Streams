import React, { useContext, useEffect, useReducer } from "react";
import {
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
  UPDATE_CATEGORY,
  FILTER_DATA,
  FILTER_DATA_STREAM,
  CLEAR_FILTERS,
  GET_ONE_VTUBER,
  UPDATE_DATA_STREAM,
  UPDATE_NAVBAR,
} from "../actions";
import axios from "axios";
import reducer from "../reducers/data_reducer";

const initialState = {
  dataVtuber: [],
  dataStream: [],
  dataFilteredVtuber: [],
  dataFilteredStream: [],
  singleVtuber: {},
  isLoading: false,
  isLoadingOne: false,
  dataError: false,
  nav: "Home",
  filtros: {
    text: "",
    categoryVtuber: "all",
    categoryStream: "live",
  },
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let API = "https://hololivfans-project-api.herokuapp.com/api/vtubers/";
  let APISTREAM =
    "https://api.holotools.app/v1/live?max_upcoming_hours=24&lookback_hours=8";

  const setNavBar = (data) => {
    dispatch({ type: UPDATE_NAVBAR, payload: data });
  };

  const getAllData = async () => {
    dispatch({ type: GET_DATA_LOADING });

    try {
      const requestVtuber = axios.get(API);
      const requestStreams = axios.get(APISTREAM);

      axios.all([requestVtuber, requestStreams]).then(
        axios.spread((...res) => {
          dispatch({ type: GET_DATA_SUCCESS, payload: res });
        })
      );
    } catch (error) {
      dispatch({ type: GET_DATA_ERROR });
    }
  };

  const getOneVtuber = async (id) => {
    dispatch({ type: GET_DATA_LOADING, payload: "one" });
    API = `${API}/${id}`;
    try {
      const res = await axios.get(API);
      const singleVtuber = res.data;
      dispatch({ type: GET_ONE_VTUBER, payload: singleVtuber });
    } catch (error) {
      dispatch({ type: GET_DATA_ERROR });
    }
  };

  const updateStreams = async () => {
    try {
      const res = await axios.get(APISTREAM);
      const updateData = res.data;
      dispatch({ type: UPDATE_DATA_STREAM, payload: updateData });
    } catch (error) {
      dispatch({ type: GET_DATA_ERROR });
    }
  };

  const updateCategory = (e) => {
    let value;
    let type;
    if (e.target.name) {
      value = e.target.value;
      type = e.target.name;
    } else {
      value = e.target.innerText.toLowerCase();
      type = e.target.attributes.name.value;
    }

    dispatch({ type: UPDATE_CATEGORY, payload: { value, type } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  useEffect(() => {
    getAllData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch({ type: FILTER_DATA });
  }, [state.filtros.categoryVtuber, state.filtros.text]);

  useEffect(() => {
    dispatch({ type: FILTER_DATA_STREAM });
  }, [state.filtros.categoryStream]);

  useEffect(() => {
    let interval = setInterval(updateStreams, 60000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <AppContext.Provider
      value={{
        ...state,
        setNavBar,
        updateCategory,
        getOneVtuber,
        clearFilters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
