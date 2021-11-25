import React from "react";
import { LatestVideo } from "./HoloVideoStyles";
import { TopSection, BannerImage } from "../../assetss/styles/styles";
import peko from "../../assetss/img/peko.jpg";

const HoloVideo = () => {
  return (
    <LatestVideo>
      <TopSection>¡Latest Hololive Ended Stream!</TopSection>
      <BannerImage>
        <img src={peko} alt="peko" />
      </BannerImage>
    </LatestVideo>
  );
};

export default HoloVideo;
