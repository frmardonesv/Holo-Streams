import React from "react";
import { CenterContainer, Title } from "../assetss/styles/styles";
import Filter from "../components/Filter/Filter";
import Nabvar from "../components/Navbar/Navbar";
import TalentSearch from "../components/TalentSearch.js/TalentSearch";

const Talents = () => {
  return (
    <div>
      <Nabvar />
      <CenterContainer height="calc(100vh - 98px - 320px)">
        <Title size="3rem" center>
          Talents
        </Title>
        <Filter talents />
        <TalentSearch title="Talents" container="talents" />
      </CenterContainer>
    </div>
  );
};

export default Talents;
