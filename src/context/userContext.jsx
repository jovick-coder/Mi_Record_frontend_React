import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// import moment from "moment";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  // logout function
  function logOutFUnction() {
    if (!window.confirm("you will be logged out!!!")) {
      return;
    }
    setLoggedIn(false);
    navigate("/");
  }
  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn, logOutFUnction }}>
      {children}
    </UserContext.Provider>
  );
}
