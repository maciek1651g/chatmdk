import styled from "styled-components";

import { mobileLargeBreakpoint } from "../../constants/constants";

const MainPageContainer = styled.section.attrs(({ backgroundImage }) => ({
    bgImage: backgroundImage,
}))`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url("${({ bgImage }) => bgImage}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .main-page-content-wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 2rem;
        width: 80%;
        height: 80%;
        border-radius: 15px;
        background-color: rgba(255, 255, 255, 0.6);

        &__welcome-message {
            align-self: flex-start;
            flex-basis: 100%;
            font-size: 3rem;
            text-align: center;

            @media(min-width: ${mobileLargeBreakpoint}px) {
                font-size: 5rem;
            }
        }
    }
`;

export default MainPageContainer;