import React from "react";
import { useGlobalContext } from "../../context/context";
import { ContainerFiltro } from "./FilterStyles";
import { sortData } from "../../utils/helpers";
import { Skeleton } from "../Loading/Skeleton";

const Filter = ({ talents }) => {
  const {
    dataVtuber: data,
    dataStream,
    filtros: { categoryVtuber: category, categoryStream: categoryS },
    isLoading: loading,
    updateCategory,
  } = useGlobalContext();

  if (loading) {
    return <Skeleton type="filters" />;
  }

  if (talents) {
    const categoriesVtuber = sortData(data, "vtuber");
    console.log(categoriesVtuber);
    return (
      <ContainerFiltro className="talents">
        <ul>
          {categoriesVtuber.map((cate, index) => {
            return (
              <li
                className={`talents ${
                  category === cate.toLowerCase() ? "active" : null
                } `}
                key={index}
                name="vtuber"
                onClick={updateCategory}
              >
                {cate}
              </li>
            );
          })}
        </ul>
      </ContainerFiltro>
    );
  }

  const categoriesStream = sortData(dataStream, "stream");
  return (
    <ContainerFiltro width="450px" className="streams">
      <ul>
        {categoriesStream.map((cateS, index) => {
          return (
            <li
              className={`${
                categoryS === cateS.toLowerCase() ? "active" : null
              }`}
              key={index}
              name="stream"
              onClick={updateCategory}
            >
              {cateS}
            </li>
          );
        })}
      </ul>
    </ContainerFiltro>
  );
};

export default Filter;
