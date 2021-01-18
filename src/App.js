import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { SecureRoute, Security, LoginCallback } from "@okta/okta-react";
import { OktaAuth } from "@okta/okta-auth-js";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Login from "./Components/Login.jsx";

const oktaAuth = new OktaAuth({
  issuer: "https://dev-6427851.okta.com/oauth2/default",
  clientId: "0oa1c6zndFpgLjH7J5d6",
  redirectUri: window.location.origin + "/implicit/callback",
});

const App = (props) => {
  const history = useHistory();

  const customAuthHandler = (oktaAuth) => {
    history.push("/implicit");
  };

  return (
    <Switch>
      <Security oktaAuth={oktaAuth} onAuthRequired={customAuthHandler}>
        <SecureRoute exact path="/" component={Home} />
        <Route path="/implicit/callback" component={LoginCallback} />
        <Route exact path="/implicit" component={Login} />
        <SecureRoute exact path="/about" component={About} />
      </Security>
    </Switch>
  );
};

export default App;
