import styled from "styled-components";

export const GenSection = styled.section`
  margin: 3em 0;
  width: 100%;
  display: grid;
  justify-content: center;
  grid-gap: 20px 15px;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    a {
      max-width: 150px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  &.grid-4 {
    grid-template-columns: repeat(2, 40%);
  }

  &.grid-3 {
    grid-template-columns: repeat(1, 40%);
  }

  @media (min-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    margin: 3em 0 0;

    &.grid-4 {
      grid-template-columns: repeat(4, 1fr);
      justify-content: center;
      div {
        a {
          width: 80%;
        }
      }
    }
    &.grid-3 {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (min-width: ${({ theme }) => theme.mediaQuery.desktop}) {
    div {
      :hover {
        img {
          transform: scale(1.1);
          transition: 0.3s ease-out;
        }
      }
    }
  } ;
`;
