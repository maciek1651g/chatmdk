import { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChatPage from "./components/ChatPage/ChatPage";

import MainPage from "./components/MainPage/MainPage";

import GlobalStyle from "./components/Shared/GlobalReset";

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/chat">
            <ChatPage />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
