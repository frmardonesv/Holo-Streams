import styled from "styled-components";

export const VideosSection = styled.section`
  h2 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 1em;
    color: #fff;
  }
`;

export const VideosContainer = styled.div`
  width: 100%;
  margin-bottom: 2em;

  div {
    position: relative;
    border-radius: 5px;
    margin-bottom: 20px;
    div {
      width: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 90%;
        :hover {
          transform: scale(1.2);
          transition: 0.3s ease;
        }
      }
    }

    p {
      font-size: 1.3em;
      color: #fff;
      text-transform: capitalize;
      text-align: center;
    }
  }
  @media (min-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    div {
      width: 47.5%;
      margin-right: 2%;
    }
    div:last-child {
      margin: 10px 0 0;
    }
  }
  @media (min-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    display: flex;
    flex-wrap: wrap;
    max-width: 1050px;
    margin-left: auto;
    margin-right: auto;
    div {
      width: 31.5%;
      margin: 0;
      margin-right: 2%;
    }
    div:last-child {
      margin: 0;
    }
  }
  @media (min-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    margin-top: 0;
  }
`;
