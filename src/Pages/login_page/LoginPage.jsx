import React, { useContext, useState } from "react";
import { BsArrowLeft, BsAt, BsKey, BsLock } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { PopUpMessageContext } from "../../context/PopUpMessageContext";
import axios from "axios";
import { FaLockOpen } from "react-icons/fa";
import { UserContext } from "../../context/userContext";

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [formEmail, setFormEmail] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const { setPopUpMessage } = useContext(PopUpMessageContext);
  const { setLoggedIn, setUserAccountInformation } = useContext(UserContext);
  const navigate = useNavigate();
  async function handelSubmit(e) {
    e.preventDefault();

    if (formEmail === "") {
      return setPopUpMessage({
        messageType: "error",
        message: "Email is empty",
      });
    }
    if (formPassword === "") {
      return setPopUpMessage({
        messageType: "error",
        message: "Password is empty",
      });
    }
    setLoading(true);

    const sendBody = {
      email: formEmail,
      password: formPassword,
    };

    try {
      const resp = await axios.post(
        "https://mi-records.herokuapp.com/api/login",
        sendBody
      );

      setLoading(false);

      if (resp.status !== 200) {
        console.error(resp);
        return setPopUpMessage({
          messageType: "error",
          message: resp.data.msg,
        });
      }
      setPopUpMessage({
        messageType: "success",
        message: resp.data.msg,
      });
      localStorage.setItem("MiToken", resp.data.token);
      setUserAccountInformation(resp.data.user);
      setLoggedIn(true);
      navigate("/dashboard/home");
    } catch (err) {
      // Handle Error Here
      console.error(err);
      setLoading(false);
      if (err.response.status !== 200) {
        return setPopUpMessage({
          messageType: "error",
          message: err.response.data.msg,
        });
      }
    }
  }
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
          <form action="" onSubmit={(e) => handelSubmit(e)}>
            <div className="input-div">
              <label htmlFor="email">
                <BsAt />
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
              />
            </div>
            <div className="input-div">
              <label htmlFor="password">
                <BsKey />
              </label>
              <input
                type="password"
                id="password"
                placeholder="password"
                value={formPassword}
                onChange={(e) => setFormPassword(e.target.value)}
              />
            </div>
            <div>
              <label>
                <input type="checkbox" name="" id="" /> Remember Me
              </label>
            </div>
            <div>
              <button className="form-btn" type="submit">
                {loading ? (
                  "Loading..."
                ) : (
                  <>
                    <FaLockOpen />
                    Login
                  </>
                )}
              </button>
            </div>
            {/* <button className="form-btn">
              <BsGoogle />
              Google
            </button> */}
            <p>
              Have An Account?
              <Link to={"/register"}>Create Account</Link>
            </p>
            {/* <p>Go to <Link to={"/dashboard/home"}>Dashboard</Link></p> */}
          </form>
        </div>
        <div className="image-div"></div>
      </div>
    </>
  );
}

export default LoginPage;
