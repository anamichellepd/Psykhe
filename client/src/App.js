import React from "react";
import { useAuth0 } from "./contexts/auth0-context";
import LandingPage from "../src/components/LandingPage/LandingPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

import Home from "../src/components/Home/Home";
import newLog from "../src/components/NewLog/newLog";
import pastLogs from "../src/components/PastLogs/pastLogs";
import sentimentAnalysis from "../src/components/SentimentAnalysis/sentimentAnalysis";

function App() {
  const { isLoading, user } = useAuth0();

  return (
    <>
      <Router>
        {!isLoading && !user && (
          <Route exact path="/" component={withRouter(LandingPage)} />
        )}
        {user && <Route exact path="/" component={withRouter(Home)} />}
        <Switch>
          <Route path="/New" component={withRouter(newLog)} />
          <Route path="/Past" component={pastLogs} />
          <Route path="/Analysis" component={sentimentAnalysis} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
