import { CardBackground, CardHeader, CardTitle } from "./styles";
import { BarGraph } from "../Graphs/BarGraph";
import CardInfoIcon from "../../assets/images/cardInfoIcon.svg";

interface CardProps {
  cardGraph?: any;
}
export const Card: React.FC<CardProps> = ({ cardGraph }) => {
  return (
    <CardBackground>
      <CardHeader>
        <img src={CardInfoIcon} alt="" />
      </CardHeader>
      {cardGraph}
    </CardBackground>
  );
};
