import React from "react";
import {
  BsArrowLeft,
  BsAt,
  BsGoogle,
  BsKey,
  BsLock,
  BsUnlock,
} from "react-icons/bs";
import { Link } from "react-router-dom";
// import Logo from "../../components/logo/Logo";
import "./LoginPage.css";

function LoginPage() {
  return (
    <>
      <Link to={"/"} className="back-btn">
        <BsArrowLeft />
      </Link>
      <div className="main-div">
        <div className="form-div login-form">
          <h1>
            {" "}
            <BsLock /> Login
          </h1>
          <form action="">
            <div className="input-div">
              <label htmlFor="email">
                <BsAt />
              </label>
              <input type="email" id="email" placeholder="Email" />
            </div>
            <div className="input-div">
              <label htmlFor="password">
                <BsKey />
              </label>
              <input type="password" id="password" placeholder="password" />
            </div>
            <div>
              <label>
                <input type="checkbox" name="" id="" /> Remember Me
              </label>
            </div>
            <div>
              <button className="form-btn">
                <BsUnlock />
                {/* <i className="fas fa-unlock-alt"></i> */}
                Login
              </button>
            </div>
            {/* <button className="form-btn">
              <BsGoogle />
              Google
            </button> */}
            <p>
              Have An Account?
              <Link to={"/register"}>Create Account</Link>
              {/* <i className="fas fa-spiner"></i> */}
            </p>
            <p>{/* Go to <Link to={"/dashboard/home"}>Dashboard</Link> */}</p>
          </form>
        </div>
        <div className="image-div"></div>
      </div>
    </>
  );
}

export default LoginPage;
