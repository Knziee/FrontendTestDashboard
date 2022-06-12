import { CardBackground, CardHeader } from "./styles";
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
