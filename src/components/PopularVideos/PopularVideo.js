import React from "react";
import { VideosContainer, VideosSection } from "./PopularStyles";

const PopularVideo = ({ data }) => {
  return (
    <VideosSection>
      <h2>Favorite Videos</h2>
      <VideosContainer>
        {data.map((video, index) => {
          const { thumb, nombre, src } = video;
          return (
            <div key={index}>
              <a href={`https://www.youtube.com/watch?v=${src}`}>
                <div>
                  <img src={thumb} alt="hola" />
                </div>
                <p>{nombre}</p>
              </a>
            </div>
          );
        })}
      </VideosContainer>
    </VideosSection>
  );
};

export default PopularVideo;
