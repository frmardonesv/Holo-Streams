import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  height: 20px;
  padding: 10px 0;
  margin-bottom: 1em;
  svg {
    margin-left: 10px;
    width: 25px;
    height: 25px;
  }
  input {
    font-weight: 600;
    margin: 0;
    margin-left: 10px;
    width: 100%;
    height: 100%;
    border: none;
  }
  input::placeholder {
    font-weight: 500;
    opacity: 0.7;
  }
  input:focus {
    outline: none;
  }
  @media (min-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 70%;
  }
  @media (min-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 50%;
  }
  @media (min-width: ${({ theme }) => theme.mediaQuery.desktop}) {
    width: 30%;
  }
`;
