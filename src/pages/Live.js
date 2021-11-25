import React from "react";
import { CenterContainer } from "../assetss/styles/styles";
import Filter from "../components/Filter/Filter";
import Nabvar from "../components/Navbar/Navbar";
import Stream from "../components/StreamSection/Stream";

export const Live = () => {
  return (
    <div>
      <Nabvar />
      <CenterContainer height="calc(100vh - 98px - 320px)">
        <Filter talents={false} />
        <Stream type="full" />
      </CenterContainer>
    </div>
  );
};
