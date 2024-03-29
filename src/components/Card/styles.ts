import styled from "styled-components";

export const CardBackground = styled.div`
  height: 359px;
  width: 680px;
  background-color: #ffff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  @media only screen and (max-width: 720px) {
    height: 359px;
    width: 84vw;
    margin-left: -20px;
  }
`;

export const CardHeader = styled.div`
  position: absolute;
  margin-left: 105px;
  margin-top: 24.5px;
`;
