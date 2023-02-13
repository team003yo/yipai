import * as React from "react";

const authUserContext = React.createContext();

function AuthUser() {
  const [authenticate, setAuthenticate] = React.useState(false);

  return {
    authenticate,
    login() {
      return new Promise((res) => {
        setAuthenticate(true);
        res();
      });
    },
    logout() {
      return new Promise((res) => {
        setAuthenticate(false);
        res();
      });
    }
  };
}

export function AuthenticationProvider({ children }) {
  const auth = AuthUser();

  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}

export default function AuthenticateConsumer() {
  return React.useContext(authUserContext);
}
