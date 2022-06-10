import { ContentWrapper, TitleButtonWrapper, CardsWrapper } from "./styles";
import { Header } from "../../components/Header";
import { TitleSubtitle } from "../../components/TitleSubtitle";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import FilterIcon from "../../assets/images/filterIcon.svg";
import CardInfoIcon from "../../assets/images/cardInfoIcon.svg";
import CardMenuIcon from "../../assets/images/cardMenuIcon.svg";

export const Main: React.FC = () => {
  return (
    <div>
      <Header />
      <ContentWrapper>
        <TitleButtonWrapper>
          <TitleSubtitle
            titleText="Dashboard"
            subTitleText="Desafio Técnico Frontend"
          />
          <Button buttonIcon={FilterIcon} buttonText="Filtrar" />
        </TitleButtonWrapper>
        <CardsWrapper>
          <Card
            cardTitle="Teste"
            cardInfoIcon={CardInfoIcon}
            cardMenuIcon={CardMenuIcon}
          />
        </CardsWrapper>
      </ContentWrapper>
    </div>
  );
};
