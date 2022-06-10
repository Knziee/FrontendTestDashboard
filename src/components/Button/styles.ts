import styled from "styled-components";

export const ButtonBackground = styled.button`
  width: 100px;
  height: 40px;
  background-color: #5d405c;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-right: 11px;
  }
  :hover {
    background-color: #755474;
  }
  :active {
    background-color: #3b263a;
  }
`;
export const ButtonText = styled.div`
  font-family: "Montserrat";
  color: #f6f6f6;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
`;
