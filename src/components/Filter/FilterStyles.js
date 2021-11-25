import styled from "styled-components";

export const ContainerFiltro = styled.section`
  overflow-x: scroll;
  ul {
    padding: 0;
    display: flex;
    width: ${(props) => (props.width ? props.width : "750px")};
    ::-webkit-scrollbar {
      display: none;
    }
    li {
      background-color: #fff;
      text-transform: capitalize;
      width: 100px;
      display: flex;
      border-radius: 7px;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 0.8rem;
      font-weight: 600;
      padding: 8px 20px;
      margin-right: 5px;
      border: 1px solid black;
      cursor: pointer;

      :hover {
        background-color: var(--purpleColor);
        color: #fff;
        transition: 0.2s ease-out;
      }
      &.active {
        background-color: var(--purpleColor);
        color: #fff;
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    overflow: initial;
    ul {
      margin: 0 auto;
      width: auto;
      display: grid;
      grid-gap: 5px 15px;
      grid-template-columns: repeat(3, 1fr);
      max-width: 700px;
      li {
        width: 100%;
        padding: 7px 0;
        font-size: 1rem;
        margin-right: 0px;
        &.talents {
          :last-child {
            grid-area: 3 / 2 / 4 / 3;
          }
        }
      }
    }
  }
  &.streams {
    max-width: 600px;
    margin: 0 auto;
  }
  @media (min-width: ${({ theme }) => theme.mediaQuery.desktop}) {
    ul {
      max-width: 1150px;
      li {
        padding: 10px 0;
        font-size: 1.3rem;
      }
    }
  } ;
`;
