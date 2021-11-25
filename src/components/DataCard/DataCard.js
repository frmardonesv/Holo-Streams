import React from "react";
import { CardData, ContainerItems } from "./DataCardStyles";

const DataCard = ({ altura, cumpleaños, debut, edad, generacion }) => {
  return (
    <ContainerItems>
      <h2>More Data</h2>
      <div>
        <CardData>
          <p>Altura</p>
          <p>{altura}cm</p>
        </CardData>
        <CardData>
          <p>Cumpleaños</p>
          <p>{cumpleaños}</p>
        </CardData>
        <CardData>
          <p>Debut</p>
          <p>{debut}</p>
        </CardData>
        <CardData>
          <p>Edad</p>
          <p>{edad} años</p>
        </CardData>
        <CardData>
          <p>Generación</p>
          <p>{generacion}</p>
        </CardData>
      </div>
    </ContainerItems>
  );
};

export default DataCard;
