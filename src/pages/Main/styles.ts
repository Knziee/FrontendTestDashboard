import styled from "styled-components";

export const ContentWrapper = styled.div`
  max-width: 1380px;
  margin: auto;
  @media only screen and (max-width: 1439px) {
    max-width: 96vw;
  }
  @media only screen and (max-width: 720px) {
    max-width: 86vw;
  }
`;

export const TitleAndButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 35px;
  margin-bottom: 35px;
`;

export const ButtonAdjust = styled.div`
  margin-top: 10px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media only screen and (max-width: 1439px) {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }
`;
