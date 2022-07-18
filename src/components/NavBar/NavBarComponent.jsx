import React, { useContext, useEffect, useState } from "react";
import "./NavBarComponent.css";
import profilePicture from "../../assets/images/profilePicture.jpg";
import {
  BsArrowLeftSquareFill,
  BsArrowRightSquareFill,
  BsBellFill,
  BsCaretDownFill,
  BsFillDoorOpenFill,
  BsHouse,
  BsPerson,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { userNavLinkObject } from "./dashboardNavList";
import { FaAccusoft } from "react-icons/fa";
import { GetTimeFunction } from "../dateAndTime/DataAndTimeComponent";
export default function NavBarComponent({ sideNavOpen, setSideNavOpen }) {
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  function navToggle() {
    setSideNavOpen(!sideNavOpen);
  }
  const [navTime, setNavTime] = useState({ time: "...", amPm: "" });
  useEffect(() => {
    const interval = setInterval(() => {
      const { currentTime, amPm } = GetTimeFunction();
      setNavTime({ time: currentTime, amPm: amPm });
    }, 0);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="NavBarComponent ">
        <div className="container-lg d-flex">
          {" "}
          <Logo />
          <div className="top-nav-time d-none d-sm-inline-flex ">
            <span className="my-auto mx-2">
              {" "}
              {navTime.time}
              <sub> {navTime.amPm}</sub>
            </span>
          </div>
          <BsBellFill className="notification-icon" />
          <span className="my-auto">
            <NavMenuComponent />
          </span>
        </div>
      </div>
    </>
  );
}

export function NavComponent() {
  return (
    <>
      {" "}
      <nav>
        <div className="logo">
          <FaAccusoft />
          Mi_Records
        </div>
        <ul>
          <li>
            {" "}
            <Link to={"/"}> Home</Link>
          </li>
          <li>
            {" "}
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            {" "}
            <Link to={"/register"}>Sign in</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export const NavProfilePicture = () => {
  return (
    <div className="ms-auto my-auto">
      <img
        src={profilePicture}
        className="NavProfilePicture ms-2"
        alt="NavProfilePicture"
      />
    </div>
  );
};

export const Logo = () => {
  return (
    <div className="logo">
      <FaAccusoft />
      Mi_Records
    </div>
  );
};
export const NavMenuComponent = () => {
  const [navMenuComponent, setNavMenuComponent] = useState(false);

  const { logOutFUnction } = useContext(UserContext);
  return (
    <>
      <div
        className="NavMenuComponent"
        onClick={() => {
          navMenuComponent
            ? setNavMenuComponent(false)
            : setNavMenuComponent(true);
        }}
      >
        <NavProfilePicture
          navMenuComponent={navMenuComponent}
          setNavMenuComponent={setNavMenuComponent}
        />{" "}
        <BsCaretDownFill className="my-auto" />
        <ul
          className="dropdown-menu-ul"
          style={
            navMenuComponent ? { display: "inline-block" } : { display: "none" }
          }
        >
          <li key={"NavMenuComponent1"}>
            <Link to={"/dashboard/home"}>
              <span className="me-2">
                <BsHouse />
              </span>
              Dashboard
            </Link>
          </li>
          <li key={"NavMenuComponent2"}>
            <Link to={"/dashboard/#"}>
              <span className="me-2">
                <BsPerson />
              </span>
              Profile
            </Link>
          </li>

          <hr />
          <li
            key={"NavMenuComponent3"}
            onClick={() => logOutFUnction()}
            className="logout text-danger"
          >
            Logout
          </li>
        </ul>
      </div>
    </>
  );
};

export const ProfilePicture = ({ className }) => {
  return (
    <img
      src={profilePicture}
      className={`ProfilePicture ms-2 ${className}`}
      alt="ProfilePicture"
    />
  );
};

export const DashboardSideNav = ({ sideNavOpen, setSideNavOpen }) => {
  function navToggle() {
    setSideNavOpen(!sideNavOpen);
  }

  const { logOutFUnction } = useContext(UserContext);

  return (
    <>
      <div
        className="
        side-nav-icon toggle"
        onClick={() => {
          navToggle();
        }}
      >
        {sideNavOpen ? <BsArrowLeftSquareFill /> : <BsArrowRightSquareFill />}
      </div>
      <ul>
        {userNavLinkObject.map((link) => {
          const { id, name, icon, path } = link;
          return (
            <>
              <li key={id}>
                <Link to={path}>
                  <div className="side-nav-icon">{icon}</div>
                  <span className="nav-link-name">{name}</span>
                </Link>
              </li>
            </>
          );
        })}
        <li onClick={() => logOutFUnction()}>
          <Link to="#">
            <div className="side-nav-icon text-danger">
              {" "}
              <BsFillDoorOpenFill />
            </div>
            <span className="nav-link-name text-danger">LogOut</span>
          </Link>
        </li>
      </ul>
    </>
  );
};
