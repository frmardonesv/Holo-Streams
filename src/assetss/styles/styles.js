import styled, { css } from "styled-components";

export const CardContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  height: ${(props) => (props.height ? props.height : "auto")};
  margin: 3em 0 5em;
  ${(props) =>
    props.stream &&
    css`
      overflow-x: scroll;
      ::-webkit-scrollbar {
        display: none;
      }
      a {
        margin-right: 10px;
      }
      img {
        width: 65px;
        border-radius: 50%;
        border: 1px solid black;
      }
    `};
  ${(props) =>
    props.talents &&
    css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 15px;
      @media (min-width: ${({ theme }) => theme.mediaQuery.mobile}) {
          grid-template-columns: repeat(3, 1fr);
        }
      }
      @media (min-width: ${({ theme }) => theme.mediaQuery.tablet}) {
          grid-template-columns: repeat(5, 1fr);
        }
      }
      @media (min-width: ${({ theme }) => theme.mediaQuery.desktop}) {
          grid-template-columns: repeat(6, 1fr);
        }
      }
    `};
  ${(props) =>
    props.streams &&
    css`
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 15px;
      @media (min-width: ${({ theme }) => theme.mediaQuery.mobile}) {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media (min-width: ${({ theme }) => theme.mediaQuery.tablet}) {
          grid-template-columns: repeat(3, 1fr);
        }
      }
      @media (min-width: ${({ theme }) => theme.mediaQuery.desktop}) {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    `};
`;

export const TalentCard = styled.li`
  height: 100%;
  position: relative;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      border-bottom: 0;
      height: 90%;
      z-index: -1;
    }
    div {
      z-index: 9;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      border: 1px solid black;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      padding: 3px 0;
      p {
        color: var(--blackColor);
        text-align: center;
        font-size: 0.9rem;
        font-weight: 600;
      }
    }
  }
  :hover {
    div {
      div {
        background-color: var(--purpleColor);
        transition: 0.2s ease-out;
        p {
          color: #fff;
        }
      }
    }
    img {
      transform: scale(1.1);
      transition: 0.2s ease-out;
    }
  }
  ${(props) =>
    props.talent &&
    css`
      width: 100%;
    `}
`;

export const TopSection = styled.section`
  color: var(--purpleColorText);
  margin-bottom: 8px;

  ${(props) =>
    props.two &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        color: #fff;
        text-decoration: underline;
        :hover {
          color: var(--purpleColorText);
          transition: 0.2s ease;
        }
      }
    `}
`;

export const BannerImage = styled.div`
  width: 100%;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "auto")};
  margin: ${(props) => props.margin && props.margin};
  ${(props) =>
    props.center &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `};
`;

export const Button = styled.button`
  width: 50px;
  height: 100%;
  background-color: ${(props) => (props.bg ? props.bg : "#fff")};
  color: ${(props) => (props.color ? props.color : "black")};
  border: ${(props) => (props.border ? props.border : "none")};
  padding: ${(props) => (props.size ? props.size : "0")};
  border-radius: 5px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;

  a {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

export const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 6px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  bottom: 0;
  background-color: var(--primaryColor);
`;

export const CenterContainer = styled.div`
  margin: ${(props) =>
    props.margin ? props.margin : `calc(80px + 1em) 10px 0`};
  @media (min-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin: calc(80px + 1em) 1em 0;
  }
  min-height: ${(props) => (props.height ? props.height : "auto")};
`;

export const Title = styled.h2`
  color: #fff;
  font-size: ${(props) => (props.size ? props.size : "1rem")};

  text-align: ${(props) => props.center && "center"}; ;
`;
