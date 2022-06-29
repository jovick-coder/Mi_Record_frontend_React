import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// import moment from "moment";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  function logOut() {
    if (!window.confirm("you will be logged out!!!")) {
      return;
    }
    // console.log("logging out....");
    setLoggedIn(false);
    navigate("/");
  }
  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
}
