import {
  ContentWrapper,
  TitleAndButtonWrapper,
  ButtonAdjust,
  CardsWrapper,
} from "./styles";
import { Header } from "../../components/Header";
import { TitleSubtitle } from "../../components/TitleSubtitle";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { BarGraph } from "../../components/Graphs/BarGraph";
import { ScatterGraph } from "../../components/Graphs/ScatterGraph";
import FilterIcon from "../../assets/images/filterIcon.svg";

export const Main: React.FC = () => {
  const graphList = [{ graph: <BarGraph /> }, { graph: <ScatterGraph /> }];

  return (
    <div>
      <Header />
      <ContentWrapper>
        <TitleAndButtonWrapper>
          <TitleSubtitle
            titleText="Dashboard"
            subTitleText="Desafio Técnico Frontend"
          />
          <ButtonAdjust>
            <Button buttonIcon={FilterIcon} buttonText="Filtrar" />
          </ButtonAdjust>
        </TitleAndButtonWrapper>
        <CardsWrapper>
          {graphList.map((graphList, index) => {
            return <Card key={index} cardGraph={graphList.graph} />;
          })}
        </CardsWrapper>
      </ContentWrapper>
    </div>
  );
};
