import React, { useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";

const About = () => {
  const { oktaAuth, authState } = useOktaAuth();

  useEffect(() => {
    if (authState.isAuthenticated) {
      oktaAuth
        .getUser()
        .then((user) => {
          console.log("user details", user);
          console.log("token is", authState.accessToken.accessToken);
        })
        .catch((err) => console.log("error"));
    }
  }, [oktaAuth, authState.accessToken, authState.isAuthenticated]);

  return <div>about</div>;
};

export default About;
