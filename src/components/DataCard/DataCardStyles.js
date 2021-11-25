import styled from "styled-components";

export const ContainerItems = styled.div`
  color: #fff;
  width: 100%;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 15px 0;
  margin-bottom: 2em;
  h2 {
    text-align: center;
    font-size: 1.7rem;
    margin-bottom: 20px;
  }
`;

export const CardData = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 15px;
  margin-bottom: 30px;
  border-bottom: 2px solid #fff;
  p {
    width: 50%;
    font-size: 1rem;
    font-weight: 600;
    padding: 0 0 10px 5px;
  }
  ::after {
    content: "";
    position: absolute;
    width: 2px;
    height: 15px;
    background-color: #fff;
    bottom: -8px;
    right: 57%;
    transform: translateX(-54%);
  }
  p:last-child {
    padding-left: 0;
  }
`;
