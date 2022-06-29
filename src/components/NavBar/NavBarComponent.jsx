import React, { useContext, useState } from "react";
import "./NavBarComponent.css";
import profilePicture from "../../assets/images/profilePicture.jpg";
import {
  BsArrowLeftSquareFill,
  BsArrowRightSquareFill,
  BsBell,
  BsCaretDownFill,
  BsFillDoorOpenFill,
  BsHouse,
  BsPerson,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { userNavLinkObject } from "./dashboardNavList";
import Logo from "../logo/Logo";
function NavBarComponent() {
  const { loggedIn, setLoggedIn } = useContext(UserContext);
  return (
    <div className="NavBarComponent">
      <div className="container mx-auto d-flex justify-content-between ">
        <Logo />
        <div className="d-flex">
          <NavMenuComponent loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </div>
      </div>
    </div>
  );
}

export default NavBarComponent;

export const NavProfilePicture = () => {
  return (
    <div className="ms-auto my-auto">
      <b>UserName</b>
      <img
        src={profilePicture}
        className="NavProfilePicture ms-2"
        alt="NavProfilePicture"
      />
    </div>
  );
};

export const NavLinkComponent = ({ linkText, to }) => {
  return <div className="NavLinkComponent">{linkText} </div>;
};

export const NavMenuComponent = ({ loggedIn, setLoggedIn }) => {
  const [navMenuComponent, setNavMenuComponent] = useState(false);
  // const navigate = useNavigate();
  // function logout() {
  //   window.confirm("logout?") && setLoggedIn(false);
  //   navigate("/");
  // }

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
        
        -icon toggle"
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
          <Link
            to="#"
            onClick={() => {
              logOut();
            }}
          >
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
