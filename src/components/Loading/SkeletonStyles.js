import styled, { css } from "styled-components";

export const SkeletonContainer = styled.div`
  margin-bottom: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  .animate {
    animation: skeleton 1s ease infinite alternate;
  }

  @media (min-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${({ theme }) => theme.mediaQuery.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  ${(props) =>
    props.filters &&
    css`
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 5px 15px;
      max-width: 600px;
      margin: 0 auto 3em;

      @media (min-width: ${({ theme }) => theme.mediaQuery.desktop}) {
        grid-template-columns: repeat(4, 1fr);

        max-width: 850px;
        margin: 0 auto;
        margin-bottom: 3em;
      }
      div {
        margin: 0;
        height: 40px;
      }
    `}

  ${(props) =>
    props.home &&
    css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px 10px;
      margin-bottom: 10px;

      div {
        width: 100%;
      }
      @media (min-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        grid-template-columns: repeat(3, 1fr);
      }

      @media (min-width: ${({ theme }) => theme.mediaQuery.desktop}) {
        grid-template-columns: repeat(6, 1fr);
      }
    `}
`;

export const SkeletonCard = styled.div`
  display: flex;
  margin: 10px 0 20px 0;
  height: 80%;
  border-radius: 5px;
  .text {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      width: 80%;
    }
    .title {
      margin-bottom: 5px;
      div {
        background-color: #181818;
        height: 20px;
        margin-bottom: 5px;
        border-radius: 5px;
      }
      div:first-child {
        width: 120%;
      }
      div:nth-child(2) {
        width: 90%;
      }
    }
    .info {
      width: 60%;
      background-color: #181818;
      height: 15px;
      border-radius: 5px;
      margin-bottom: 10px;
    }
    .status {
      width: 60%;
      background-color: #181818;
      height: 30px;
      border-radius: 5px;
    }
  }
  ${(props) =>
    props.home &&
    css`
      display: flex;
      flex-direction: column;
      height: 180px;
      margin: 0;
    `}
`;

export const SkeletonImage = styled.div`
  width: ${(props) => (props.width ? props.width : "50%")};
  height: ${(props) => (props.height ? props.height : "140px")};
  border-radius: 10px;
  margin-right: 10px;
  background-color: #181818;

  &.home {
    width: 100%;
    height: 60%;
    @media (min-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      height: 180px;
    }
    @media (min-width: ${({ theme }) => theme.mediaQuery.desktop}) {
      height: 200px;
    }
  }
`;

export const SkeletonText = styled.div`
  width: ${(props) => (props.width ? props.width : "auto")};
  margin: ${(props) => (props.margin ? props.margin : "0")};

  .animate {
    animation: skeleton 1s ease infinite alternate;
  }

  &.noTitle {
    display: none;
  }

  height: 25px;
  background-color: #181818;
  border-radius: 5px;
  margin-bottom: 10px;
  &.top {
    width: 40%;
    height: 25px;
    border-radius: 5px;
    @media (min-width: ${({ theme }) => theme.mediaQuery.desktop}) {
      width: 20%;
    }
  }
  &.paragraft {
    margin-top: 10px;
  }
`;

export const VtuberInfoCont = styled.div`
  max-width: 1050px;
  margin: 7em auto 3em;

  .animate {
    animation: skeleton 1s ease infinite alternate;
  }

  width: 90%;
  .top {
    display: flex;
    width: 100%;
    margin-bottom: 3em;
    .left {
      width: 50%;
    }
    .right {
      width: 50%;
      .text {
        margin: 2em 0;
      }
    }
    .socials {
      display: flex;
      justify-content: space-around;
      margin-bottom: 1em;
    }
    .gen {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      width: 80%;
      div {
        width: 70px;
        height: 70px;
        background-color: #181818;
        border-radius: 50%;
      }
    }
  }
  .bottom {
    .videos {
      display: flex;
    }
  }
  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    .top {
      flex-direction: column;
      .left {
        width: 100%;
        margin-bottom: 3em;
        div {
          margin: 0 auto;
        }
      }
      .right {
        width: 100%;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    .bottom {
      .videos {
        flex-direction: column;
        div {
          width: 100%;
          margin-bottom: 2em;
        }
      }
    }
  }
`;
