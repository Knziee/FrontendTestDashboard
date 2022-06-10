import { ButtonBackground, ButtonText } from "./styles";


interface ButtonProps {
  buttonIcon?: string;
  buttonText?: string;
}

export const Button: React.FC<ButtonProps> = ({ buttonIcon, buttonText }) => {
  return (
    <ButtonBackground>
      <img src={buttonIcon} alt="buttonIcon" />
      <ButtonText>{buttonText}</ButtonText>
    </ButtonBackground>
  );
};
