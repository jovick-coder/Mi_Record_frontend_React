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
      <div className="top-nav">
        {" "}
        <NavBarComponent
          sideNavOpen={sideNavOpen}
          setSideNavOpen={setSideNavOpen}
        />
      </div>
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
            <div className="text-center my-4">
              <a
                href="https://www.linode.com/?utm_source=hashnode&utm_medium=article&utm_campaign=hackathon_announcement"
                target="_blank"
                className="mx-2"
                rel="noopener noreferrer"
              >
                Linode
              </a>
              x
              <a
                href="https://hashnode.com/"
                target="_blank"
                className="mx-2"
                rel="noopener noreferrer"
              >
                Hashnode project
              </a>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
