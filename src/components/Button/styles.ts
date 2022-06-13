import styled from "styled-components";

export const ButtonBackground = styled.button`
  width: 100px;
  height: 40px;
  background-color: #8dd471;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-right: 11px;
  }
  :hover {
    background-color: #5c3f5c;
  }
`;

export const ButtonText = styled.div`
  font-family: "MontserratSemiBold";
  color: #f6f6f6;
  font-size: 14px;
  font-weight: 600;
`;
