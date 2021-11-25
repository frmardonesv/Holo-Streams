import styled from "styled-components";

export const NabvarContainer = styled.nav`
  top: 0;
  width: 100%;
  position: fixed;
  z-index: 999;
  background-color: var(--backgroundD7);

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 10px 0;
    position: relative;
  }
  h2 {
    padding-left: 20px;
    color: #fff;
    font-size: 1.2rem;
  }
  svg {
    font-size: 1.8rem;
    padding-right: 10px;
  }
  ul {
    padding: 0;
    position: absolute;
    top: calc(-100vh - 55px);
    list-style: none;
    height: 100vh;
    width: 100%;

    li {
      display: flex;
      justify-content: center;
      color: #fff;
      padding: 10px 0;
      font-size: 1.5rem;
      &.activeNav {
        color: var(--purpleColorText);
      }
    }
  }

  &.active {
    ul {
      top: 55px;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100%;
      text-align: center;
      background-color: var(--backgroundD7);
      z-index: 999;
      transition: 0.3s ease;
    }
  }
  @media (min-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    .menu {
      display: none;
    }
    &.active ul,
    ul {
      flex-direction: row;
      position: relative;
      top: 0;
      height: 30px;
      width: auto;
      margin: 0;
      display: flex;
      align-items: center;
      padding: 0;
      padding-right: 20px;
      transition: none;
      li:first-child {
        margin-left: 30px;
      }
      li {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 1.5rem;
        svg {
          font-size: 1.6rem;
        }
        font-weight: 500;
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.mediaQuery.desktop}) {
    li:hover {
      color: var(--purpleColorText);
      transition: 0.2s ease;
    }
  }
`;
