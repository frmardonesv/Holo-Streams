import React from "react";
import Nabvar from "../components/Navbar/Navbar";
import Stream from "../components/StreamSection/Stream";
import Talents from "../components/Talents/Talents";
import { CenterContainer } from "../assetss/styles/styles";

const Home = () => {
  return (
    <>
      <Nabvar />
      <CenterContainer>
        <Stream />
        <Talents container="home" />
      </CenterContainer>
    </>
  );
};

export default Home;
