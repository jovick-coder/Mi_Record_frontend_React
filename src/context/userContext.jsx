import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// import moment from "moment";
import { PopUpMessageContext } from "./PopUpMessageContext";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userAccountInformation, setUserAccountInformation] = useState({});
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

  // copy link function
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

  // edit date function
  function editDateFunction(date) {
    const dateArray = date.split("T");
    const dateOnly = dateArray[0];
    const dateOnlyArray = dateOnly.split("-");
    const rearrangeDate = `${dateOnlyArray[1]}/${dateOnlyArray[2]}/${dateOnlyArray[0]} `;
    return rearrangeDate;
  }

  // get user id from token
  function getUserIdFunction() {
    const token = localStorage.getItem("MiToken");
    const tokenArray = token.split(".");
    const decode = JSON.parse(atob(tokenArray[1]));

    const userId = decode.id;
    return userId;
  }

  return (
    <UserContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        logOutFUnction,
        copyLinkFunction,
        editDateFunction,
        userAccountInformation,
        setUserAccountInformation,
        getUserIdFunction,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
