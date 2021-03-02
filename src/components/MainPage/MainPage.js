import { Link } from "react-router-dom";

import MainPageContainer from "./MainPageContainer";
import StartChat from "./StartChat";

import mainBackground from "../../assets/images/mainBg.png"

const MainPage = () => {
    console.log(mainBackground)
    return (
        <MainPageContainer backgroundImage={mainBackground}>
            <div className="main-page-content-wrapper">
                <h1 className="main-page-content-wrapper__welcome-message">
                    Witaj na stronie do czatowania online!
                </h1>
                <StartChat>
                    <Link to="/chat">Rozpocznij czat</Link>
                </StartChat>
            </div>
        </MainPageContainer>
    )
}


export default MainPage;
