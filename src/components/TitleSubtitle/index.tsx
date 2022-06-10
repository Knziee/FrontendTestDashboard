import { TitleStyle, SubTitleStyle, TitleSubtitleContainer } from "./styles";

interface TitleSubtitleProps {
  titleText?: string;
  subTitleText?: string;
}
export const TitleSubtitle: React.FC<TitleSubtitleProps> = ({
  titleText,
  subTitleText,
}) => {
  return (
    <TitleSubtitleContainer>
      <TitleStyle>{titleText}</TitleStyle>
      <SubTitleStyle>{subTitleText}</SubTitleStyle>
    </TitleSubtitleContainer>
  );
};
