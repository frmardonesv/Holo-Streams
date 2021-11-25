import styled from "styled-components";

export const StreamSection = styled.section``;

export const StreamContainer = styled.div`
  width: 100%;
  margin-bottom: 3em;
  div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    h2 {
      color: var(--purpleColorText);
      text-transform: capitalize;
      font-size: 1.5rem;
    }
    a {
      color: #fff;
      text-decoration: underline;
      font-size: 1rem;

      :hover {
        color: var(--purpleColorText);
        transition: 0.2s ease;
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.mediaQuery.desktop}) {
    div:first-child {
      a {
        font-size: 1.2rem;
      }
    }
  }
`;
