import { createGlobalStyle } from "styled-components";

import latoFont from "../../assets/fonts/Lato-Regular.ttf"

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Lato";
        src: url("${latoFont}") format('truetype');
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Lato";
    }

    html {
        font-size: 10px;
    }
`;

export default GlobalStyle;