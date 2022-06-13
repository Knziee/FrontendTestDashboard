import { createGlobalStyle } from "styled-components";
import MontserratBold from "../../assets/fonts/Montserrat-Bold.ttf";
import MontserratMedium from "../../assets/fonts/Montserrat-Medium.ttf";
import MontserratSemiBold from "../../assets/fonts/Montserrat-SemiBold.ttf";

export const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'MontserratBold';
        src: local('MontserratBold'),
        url(${MontserratBold}) format('truetype');
        font-weight: 700;
    }
    @font-face {
        font-family: 'MontserratMedium';
        src: local('MontserratMedium'),
        url(${MontserratMedium}) format('truetype');
        font-weight: 500;
    }
    @font-face {
        font-family: 'MontserratSemiBold';
        src: local('MontserratSemiBold'),
        url(${MontserratSemiBold}) format('truetype');
        font-weight: 600;
    }
`;
