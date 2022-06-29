import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBarComponent, {
  DashboardSideNav,
} from "../../components/NavBar/NavBarComponent";
import "./Dashboard.css";

function Dashboard() {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  return (
    <>
      <NavBarComponent />
      <div className="Dashboard">
        <input
          type="checkbox"
          className="sideBarCheck"
          checked={sideNavOpen ? true : false}
          style={{ display: "none" }}
          onChange={() => null}
        />
        <div className="page-body-wrapper">
          <div className="side-nav">
            <DashboardSideNav
              sideNavOpen={sideNavOpen}
              setSideNavOpen={setSideNavOpen}
            />
          </div>
          <main className="main-dashboard-page ps-1">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
