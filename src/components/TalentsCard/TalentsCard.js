import React from "react";
import { Link } from "react-router-dom";
import { CardContainer, TalentCard } from "../../assetss/styles/styles";
import { useGlobalContext } from "../../context/context";
import { Skeleton } from "../Loading/Skeleton";

const TalentsCard = ({ container }) => {
  const {
    dataError: error,
    dataFilteredVtuber,
    isLoading: loading,
  } = useGlobalContext();

  if (error) {
    return <h2>Error.</h2>;
  }
  if (loading) {
    return <Skeleton type="homeTalent" variant="noTitle" />;
  }

  let data = dataFilteredVtuber;

  if (container === "home") {
    data = data.slice(0, 6);
  }

  return (
    <CardContainer talents className={container}>
      {data.length === 0 ? (
        <h2>No se encontraron coincidencias.</h2>
      ) : (
        data.map((item) => {
          const { avatar, nombre, _id: id } = item;
          return (
            <TalentCard talent key={id}>
              <Link
                to={{ pathname: `vtuber/${id}`, state: { fromHome: true } }}
              >
                <div>
                  <img src={avatar} alt={nombre} />
                  <div>
                    <p>{nombre}</p>
                  </div>
                </div>
              </Link>
            </TalentCard>
          );
        })
      )}
    </CardContainer>
  );
};

export default TalentsCard;
