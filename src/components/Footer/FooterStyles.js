import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  color: #fff;
  background-color: var(--backgroundD7);
  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 20px;
    h3 {
      margin: 0 auto;
      font-size: 1.4rem;
      margin-bottom: 15px;
      position: relative;
      width: fit-content;
    }
    h3:after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -2px;
      width: 65%;
      height: 2px;
      background-color: #fff;
    }

    .about {
      position: relative;
      span:first-child {
        font-weight: 600;
        margin-bottom: 10px;
        font-size: 1rem;
        padding: 0;
      }
      span {
        display: block;
        margin: 0 auto;
        font-size: 0.9rem;
        padding: 0 25px;
        line-height: 1.3rem;
        font-weight: 500;
      }
    }
    hr {
      width: 70%;
      margin: 20px auto 20px;
    }

    .resources {
      margin: 0;
      list-style: none;
      padding: 0;
      li {
        margin-bottom: 10px;
        a {
          color: #fff;
          font-weight: 500;
        }
        :hover {
          a {
            color: var(--purpleColorText);
            transition: 0.2s ease;
          }
        }
      }
    }
  }
  .hidden {
    display: none;
  }
  h2 {
    padding-bottom: 15px;
    margin-top: 15px;
    text-align: center;
    font-size: 1rem;
    padding: 0 20px 15px;
    line-height: 1.5rem;
  }
  @media (min-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    .container {
      flex-direction: row;
      justify-content: space-evenly;
      hr {
        display: none;
      }
      .about {
        width: 50.5%;
        h3 {
          font-size: 1.3rem;
        }
        span:first-child {
          font-size: 1.1rem;
          margin-bottom: 15px;
        }
        span {
          font-size: 1rem;
          line-height: 1.6rem;
          padding: 0 35px;
        }
      }
    }
    .hidden {
      display: block;
      width: 40%;
      margin: 20px auto;
    }
    h2 {
      font-size: 1.1rem;
    }
  }
  @media (min-width: ${({ theme }) => theme.mediaQuery.desktop}) {
    .container {
      .about {
        max-width: 40%;
        h3 {
          font-size: 1.7rem;
        }
        span:first-child {
          font-size: 1.3rem;
        }
        span {
          font-size: 1.1rem;
          padding: 0 100px;
        }
      }
    }

    .resources {
      padding: 0 10px;
      max-width: 250px;
    }
    .hidden {
      display: block;
      width: 40%;
      margin: 30px auto;
    }
    h2 {
      font-size: 1.3rem;
    }
  }
`;
