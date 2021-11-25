import React from "react";
import { TalentSection } from "./TalentsStyles";
import { TopSection } from "../../assetss/styles/styles";
import { Link } from "react-router-dom";
import TalentsCard from "../TalentsCard/TalentsCard";
import { useGlobalContext } from "../../context/context";
import { Skeleton } from "../Loading/Skeleton";
import SearchBar from "../SearchBar/SearchBar";

const Talents = ({ container }) => {
  const { isLoading: loading, setNavBar } = useGlobalContext();

  if (loading) {
    return <Skeleton type="homeTalent" />;
  }
  return (
    <TalentSection>
      <TopSection two>
        <h2>Hololive Talents</h2>
        <Link onClick={() => setNavBar("Talents")} to="/talents">
          More
        </Link>
      </TopSection>
      <SearchBar />
      <TalentsCard container={container} />
    </TalentSection>
  );
};

export default Talents;
