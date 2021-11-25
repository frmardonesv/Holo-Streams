import React, { useEffect } from "react";
import {
  CentralContainer,
  ContainerImageBg,
  VtuberContainer,
} from "./VtuberInfoStyles";
import { useParams } from "react-router-dom";
import { CenterContainer } from "../../assetss/styles/styles";
import PopularVideo from "../PopularVideos/PopularVideo";
import GenMembers from "../GenMembers/GenMembers";
import { useGlobalContext } from "../../context/context";
import { sortData } from "../../utils/helpers";
import { Skeleton } from "../Loading/Skeleton";

const VtuberInfo = () => {
  const {
    getOneVtuber,
    isLoadingOne,
    singleVtuber: data,
    dataError,
    dataVtuber,
    setNavBar,
  } = useGlobalContext();

  const { id } = useParams();

  useEffect(() => {
    setNavBar("Talents");
    getOneVtuber(id);
    // eslint-disable-next-line
  }, [id]);

  if (isLoadingOne || !data.videos) {
    return <Skeleton type="vtuberInfo" />;
  }
  if (dataError) {
    return <h2>Error :/</h2>;
  }

  const genMembers = sortData(dataVtuber, "members", data);
  return (
    <VtuberContainer>
      <ContainerImageBg>
        <div>
          <img src={data.bgAvatar} alt={data.nombre} />
        </div>
      </ContainerImageBg>

      <CentralContainer>
        <div className="left-container">
          <figure className="top-image">
            <img loading="lazy" src={data.bgAvatar} alt={data.nombre} />
          </figure>
        </div>

        <div className="right-container">
          <div className="top">
            <h2>{data.nombre}</h2>
            <p>{data.originalName || ""}</p>
          </div>

          <div className="info">
            <p>{data.descripcion}</p>
          </div>

          <ul className="social-links">
            <li>
              <a href={data.twitter}>Twitter</a>
            </li>
            <li>
              <a href={data.youtubeChannel}>Youtube</a>
            </li>
          </ul>

          <GenMembers members={genMembers} />
        </div>
      </CentralContainer>

      <CenterContainer margin="2em 1em 0">
        {data.videos.length === 0 ? (
          <h2>No hay videos</h2>
        ) : (
          <PopularVideo data={data.videos} />
        )}

        {/* <DataCard {...data} /> */}
      </CenterContainer>

      {/* <LikeContainer>
        <AiOutlineHeart size="2.5rem" />
      </LikeContainer> */}
    </VtuberContainer>
  );
};

export default VtuberInfo;
