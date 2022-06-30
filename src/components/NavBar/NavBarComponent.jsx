import React, { useContext, useState } from "react";
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
export default function NavBarComponent({ sideNavOpen, setSideNavOpen }) {
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  function navToggle() {
    setSideNavOpen(!sideNavOpen);
  }
  return (
    <>
      <div class="NavBarComponent ">
        <div className="container-lg d-flex">
          {" "}
          <div class="logo">
            <FaAccusoft />
            Mi_Records
          </div>
          <div class="top-nav-time d-none d-sm-inline-flex ">
            {/* <div class="time d-flex">
            <span class="hms m-auto"></span>
            <span class="ampm m-auto"></span>
          </div> */}
          </div>
          <BsBellFill className="notification-icon" />
          <NavMenuComponent />
        </div>
      </div>
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

export const NavMenuComponent = () => {
  const [navMenuComponent, setNavMenuComponent] = useState(false);

  const { logOut } = useContext(UserContext);
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
          <li>
            <Link to={"/dashboard/home"}>
              <span className="me-2">
                <BsHouse />
              </span>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to={"/dashboard/#"}>
              <span className="me-2">
                <BsPerson />
              </span>
              Profile
            </Link>
          </li>

          <hr />
          <li onClick={() => logOut()} className="logout text-danger">
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

  const { logOut } = useContext(UserContext);

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
        {userNavLinkObject.map((link, i) => {
          const { name, icon, path } = link;

          return (
            <>
              <li key={i}>
                <Link to={path}>
                  <div className="side-nav-icon">{icon}</div>
                  <span className="nav-link-name">{name}</span>
                </Link>
              </li>
            </>
          );
        })}
        <li>
          <Link to="#" onClick={() => logOut()}>
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
