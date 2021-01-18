import React from "react";
import { useOktaAuth } from "@okta/okta-react";

const SignIn = () => {
  const { oktaAuth, authState } = useOktaAuth();

  const login = async () => oktaAuth.signInWithRedirect("/");
  const logout = async () => oktaAuth.signOut("/");

  if (authState.isPending) {
    return <div style={{ marginLeft: "50%" }}>Loading...</div>;
  }

  if (!authState.isAuthenticated) {
    login();
  } else {
    logout();
  }

  return (
    <div>
      <p>Not Logged in!</p>
    </div>
  );
};

export default SignIn;
