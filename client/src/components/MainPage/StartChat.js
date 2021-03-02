import styled from "styled-components";

import { mobileLargeBreakpoint } from "../../constants/constants";

const StartChat = styled.div`
    align-self: flex-start;

    a {
        display: block;
        width: 15rem;
        line-height: 7rem;
        font-size: 1.8rem;
        font-weight: bold;
        border-radius: 15px;
        background-color: rgb(135, 179, 219); 
        box-shadow: 4px 5px 1px 1px rgba(0, 0, 0, 0.7);
        text-align: center;
        text-decoration: none;
        color: black;    

        transition: background-color 0.3s linear;

        &:hover {
            background-color: rgb(120, 140, 205)
        }

        @media (min-width: ${mobileLargeBreakpoint}px) {
            width: auto;
            padding: 15px 20px;
            font-size: 4rem;
        }
    }
`;

export default StartChat;