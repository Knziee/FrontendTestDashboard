import { CardBackground, CardHeader, CardTitle } from "./styles";
import { Graph } from "../Graphs";

interface CardProps {
  cardTitle?: string;
  cardInfoIcon?: string;
  cardMenuIcon?: string;
}
export const Card: React.FC<CardProps> = ({
  cardTitle,
  cardInfoIcon,
  cardMenuIcon,
}) => {
  return (
    <CardBackground>
      {/* <CardHeader>
        <CardTitle>
          {cardTitle}
          <img src={cardInfoIcon} alt="cardInfoIcon" />
        </CardTitle>
        <img src={cardMenuIcon} alt="cardMenuIcon" />
      </CardHeader> */}
      <Graph />
    </CardBackground>
  );
};
