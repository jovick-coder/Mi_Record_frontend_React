import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function PortfolioPage() {
  const { userAccountInformation } = useContext(UserContext);

  const userName = userAccountInformation[0].fullName;
  return (
    <>
      <div className="row my-4">
        <div className="col-md-12 ">
          <div className="ms-2">
            <span className="d-none d-sm-inline">{userName}</span>
            <h1 className="head-text">Portfolio</h1>
          </div>
        </div>
      </div>
      <div className="main-card full-main-card text-center">
        Page is still under construction
      </div>
    </>
  );
}
