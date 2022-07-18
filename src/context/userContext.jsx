import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// import moment from "moment";
import { PopUpMessageContext } from "./PopUpMessageContext";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { setPopUpMessage } = useContext(PopUpMessageContext);

  // logout function
  function logOutFUnction() {
    if (!window.confirm("you will be logged out!!!")) {
      return;
    }
    setLoggedIn(false);
    navigate("/");
  }
  function copyLinkFunction(text) {
    let copiedText = text;
    navigator.clipboard.writeText(copiedText).then(
      function () {
        /* success */
        setPopUpMessage({
          messageType: "success",
          message: "Link copied",
        });
      },
      function () {
        /* failure */
        setPopUpMessage({
          messageType: "error",
          message: "Error coping link",
        });
      }
    );
  }
  return (
    <UserContext.Provider
      value={{ loggedIn, setLoggedIn, logOutFUnction, copyLinkFunction }}
    >
      {children}
    </UserContext.Provider>
  );
}
