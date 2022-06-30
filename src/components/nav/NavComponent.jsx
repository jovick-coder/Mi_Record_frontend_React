import React, { useContext } from "react";
import {
  BsArrowLeftSquareFill,
  BsArrowRightSquareFill,
  BsFillDoorOpenFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";

export default function NavComponent() {
  return (
    <>
      {" "}
      <nav>
        <Logo /> Mi_Records
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
