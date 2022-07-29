import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBarComponent, {
  DashboardSideNav,
} from "../../components/NavBar/NavBarComponent";
import "./Dashboard.css";
import { UserContext } from "../../context/userContext";

function Dashboard() {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const { loggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("MiToken");
  useEffect(() => {
    if (loggedIn === false && token === "") {
      navigate("/login");
      return (
        <>
          You have no access to this page
          <br />
          you will be redirected to the login page
        </>
      );
    }
  }, []);

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
                href="https://townhall.hashnode.com/planetscale-hackathon?source=hashnode_countdown"
                target="_blank"
                className="mx-2"
                rel="noopener noreferrer"
              >
                PlanetScale
              </a>
              x
              <a
                href="https://hashnode.com/"
                target="_blank"
                className="mx-2"
                rel="noopener noreferrer"
              >
                Hashnode
              </a>
              <span className="d-none d-md-inline">Project</span>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
