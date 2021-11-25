import {
  CLEAR_FILTERS,
  GET_DATA_LOADING,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
  UPDATE_CATEGORY,
  FILTER_DATA,
  FILTER_DATA_STREAM,
  GET_ONE_VTUBER,
  UPDATE_DATA_STREAM,
  UPDATE_NAVBAR,
} from "../actions";

const data_reducer = (state, action) => {
  if (action.type === UPDATE_NAVBAR) {
    return { ...state, nav: action.payload };
  }

  if (action.type === GET_DATA_LOADING) {
    if (action.payload) {
      return { ...state, isLoadingOne: true };
    }
    return { ...state, isLoading: true };
  }

  if (action.type === GET_DATA_SUCCESS) {
    return {
      ...state,
      dataStream: action.payload[1].data,
      dataFilteredStream: action.payload[1].data.live,
      dataVtuber: action.payload[0].data,
      dataFilteredVtuber: action.payload[0].data,
      isLoading: false,
    };
  }
  if (action.type === UPDATE_DATA_STREAM) {
    return {
      ...state,
      dataStream: action.payload,
      dataFilteredStream: action.payload.live,
    };
  }

  if (action.type === GET_ONE_VTUBER) {
    return {
      ...state,
      singleVtuber: action.payload,
      isLoadingOne: false,
    };
  }

  if (action.type === GET_DATA_ERROR) {
    return { ...state, isLoading: false, dataError: true };
  }

  if (action.type === UPDATE_CATEGORY) {
    const { type, value } = action.payload;
    if (type === "text") {
      return {
        ...state,
        filtros: {
          ...state.filtros,
          text: value,
        },
      };
    }
    if (type === "stream") {
      return {
        ...state,
        filtros: {
          ...state.filtros,
          categoryStream: value,
        },
      };
    }
    return {
      ...state,
      filtros: {
        ...state.filtros,
        categoryVtuber: value,
      },
    };
  }

  if (action.type === FILTER_DATA) {
    const { dataVtuber } = state;
    const { categoryVtuber: category, text } = state.filtros;

    let dataTemp = [...dataVtuber];

    if (text) {
      dataTemp = dataTemp.filter((item) =>
        item.nombre.toLowerCase().includes(text.toLowerCase())
      );
    }

    if (category.toLowerCase() !== "all") {
      dataTemp = dataTemp.filter(
        (item) => item.generacion.toLowerCase() === category.toLowerCase()
      );
    }

    return { ...state, dataFilteredVtuber: dataTemp };
  }

  if (action.type === FILTER_DATA_STREAM) {
    const { dataStream } = state;
    const { categoryStream: category } = state.filtros;

    let dataTemp = dataStream.live;

    if (category.toLowerCase() !== "live") {
      dataTemp = dataStream[category];
    }

    return { ...state, dataFilteredStream: dataTemp };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filtros: {
        text: "",
        categoryVtuber: "all",
        categoryStream: "live",
      },
    };
  }
};

export default data_reducer;
