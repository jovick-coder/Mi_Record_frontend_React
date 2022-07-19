import React from "react";
import {
  BsArrowLeft,
  BsAt,
  BsBook,
  BsKey,
  BsPerson,
  BsPhone,
} from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
function RegisterPage() {
  return (
    <>
      <Link to={"/"} className="back-btn">
        <BsArrowLeft />
      </Link>
      <main className="main-div">
        <div className="form-div login-form">
          <h1>
            {" "}
            <BsBook />
            Register
          </h1>
          <form action="">
            <div className="input-div">
              <label for="name">
                <BsPerson />
              </label>
              <input type="text" id="name" placeholder="Fullname" />
            </div>
            <div className="input-div">
              <label for="email">
                <BsAt />
              </label>
              <input type="email" id="email" placeholder="Email" />
            </div>
            <div className="input-div">
              <label for="number">
                <BsPhone />
              </label>
              <input type="number" id="number" placeholder="Contact" />
            </div>
            <div className="input-div">
              <label for="password">
                <BsKey />
              </label>
              <input type="password" id="password" placeholder="Password" />
            </div>
            <div className="input-div">
              <label for="password">
                <BsKey />
              </label>
              <input type="password" id="password" placeholder="Re password" />
            </div>

            <div>
              <button className="form-btn">
                <i className="fas fa-address-card"></i>
                Register
              </button>
            </div>
            {/* <button className="form-btn">
              <FaGoogle />
              Google
            </button> */}
            <p>
              Have An Account? <Link to={"/login"}>Login</Link>
            </p>
          </form>
        </div>
        {/* </div> */}
        <div className="image-div"></div>
      </main>
    </>
  );
}

export default RegisterPage;
