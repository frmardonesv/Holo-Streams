import React from "react";
import styled from "styled-components";
import TalentsCard from "../TalentsCard/TalentsCard";

const TalentSearch = ({ title, container }) => {
  return (
    <InfoContainer>
      <TalentsCard container={container} />
    </InfoContainer>
  );
};

export default TalentSearch;

const InfoContainer = styled.section`
  margin-top: 20px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.mediaQuery.desktop}) {
    max-width: 1150px;
    margin: 2em auto 0;
    text-align: center;
  }
`;
