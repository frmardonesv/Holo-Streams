import styled from "styled-components";

export const VtuberContainer = styled.section`
  position: relative;
  margin: calc(55px + 2em) 0 0;
  height: 100%;
`;

export const ContainerImageBg = styled.div`
  z-index: -1;
  position: fixed;
  top: 0;
  left: -30px;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  div {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    left: -150px;
    div {
      width: 50.5%;
    }
  }
`;

export const CentralContainer = styled.section`
  display: relative;
  .left-container {
    .top-image {
      margin: 0 auto 2em;
      height: 120vw;
      img {
        aspect-ratio: auto 223 / 878;
        width: 100%;
        height: 100%;
      }
    }
  }

  .right-container {
    margin: ${({ theme }) => theme.margin};
    .top {
      margin: 0 0 3em;
      text-align: center;
      color: #fff;
      h2 {
        font-weight: 700;
        font-size: 40px;
      }
      p {
        margin-top: 8px;
        opacity: 0.7;
        font-size: 1.2em;
      }
    }

    .info {
      margin-bottom: 3em;
      text-align: center;
      color: #fff;
      p:first-child {
        margin-bottom: 20px;
        font-size: 19px;
      }
      p {
        font-size: 15px;
        font-weight: lighter;
        line-height: 2rem;
      }
    }

    .social-links {
      padding: 0;
      display: flex;
      justify-content: space-between;
      list-style: none;
      width: 100%;
      li {
        background-color: #fff;
        width: 48.5%;
        max-width: 270px;
        font-size: 1.1rem;
        font-weight: 600;
        border: 1px solid var(--backgroundColor);
        border-radius: 3px;
        text-align: center;
        color: var(--backgroundColor);
        a {
          display: block;
          padding: 8px 0;
        }
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    .left-container {
      .top-image {
        height: 95vw;
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    display: flex;
    max-width: 1050px;
    margin-left: auto;
    margin-right: auto;
    .left-container {
      width: 49.5%;

      .top-image {
        display: flex;
        justify-content: center;
        height: 70vh;

        img {
          width: auto;
          height: 100%;
        }
      }
    }
    .right-container {
      width: 49.5%;
      padding: 30px 25px;
      margin: 0;
      .top {
        margin: 0 0 2em;
        h2 {
          font-size: 30px;
        }
        p {
          font-size: 1em;
        }
      }
      .info {
        margin-bottom: 2em;
        p:first-child {
          margin-bottom: 15px;
          font-size: 19px;
        }
        p {
          font-size: 17px;
        }
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.mediaQuery.desktop}) {
    max-width: 1100px;
    .right-container {
      li {
        :hover {
          a {
            background-color: var(--purpleColor);
            color: #fff;
            transition: 0.2s ease;
          }
        }
      }
    }
  }
`;

export const LikeContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--purpleColorText);
  position: fixed;
  bottom: 25px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
