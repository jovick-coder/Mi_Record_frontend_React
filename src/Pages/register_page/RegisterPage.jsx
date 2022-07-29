import axios from "axios";
import React, { useContext, useState } from "react";
import {
  BsArrowLeft,
  BsAt,
  BsBook,
  BsKey,
  BsPerson,
  BsPhone,
} from "react-icons/bs";
import { FaAddressBook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { PopUpMessageContext } from "../../context/PopUpMessageContext";
function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formContact, setFormContact] = useState("");
  const [formPassword, setFormPassword] = useState("");
  const [formRePassword, setFormRePassword] = useState("");

  const navigate = useNavigate();
  const { setPopUpMessage } = useContext(PopUpMessageContext);

  async function handelSubmit(e) {
    e.preventDefault();
    if (formName === "") {
      return setPopUpMessage({
        messageType: "error",
        message: "Name is empty",
      });
    }
    if (formContact === "") {
      return setPopUpMessage({
        messageType: "error",
        message: "Contact is empty",
      });
    }
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
    if (formPassword !== formRePassword) {
      return setPopUpMessage({
        messageType: "error",
        message: "Password not corresponding ",
      });
    }

    setLoading(true);
    const sendBody = {
      email: formEmail,
      phoneNumber: formContact,
      fullName: formName,
      password: formPassword,
    };

    try {
      const resp = await axios.post(
        "https://mi-records.herokuapp.com/api/register",
        sendBody
      );

      setLoading(false);

      if (resp.status !== 201) {
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
      navigate("/login");
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
      <main className="main-div">
        <div className="form-div login-form">
          <h1>
            {" "}
            <BsBook />
            Register
          </h1>
          <form action="" onSubmit={(e) => handelSubmit(e)}>
            <div className="input-div">
              <label for="name">
                <BsPerson />
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
              />
            </div>
            <div className="input-div">
              <label for="email">
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
              <label for="number">
                <BsPhone />
              </label>
              <input
                type="number"
                id="number"
                placeholder="Contact"
                value={formContact}
                onChange={(e) => setFormContact(e.target.value)}
              />
            </div>
            <div className="input-div">
              <label for="password">
                <BsKey />
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={formPassword}
                onChange={(e) => setFormPassword(e.target.value)}
              />
            </div>
            <div className="input-div">
              <label for="password">
                <BsKey />
              </label>
              <input
                type="password"
                id="password"
                placeholder="Re password"
                value={formRePassword}
                onChange={(e) => setFormRePassword(e.target.value)}
              />
            </div>

            <div>
              <button className="form-btn">
                <i className="fas fa-address-card"></i>
                {loading ? (
                  "Loading..."
                ) : (
                  <>
                    <FaAddressBook />
                    Register
                  </>
                )}
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
        <div className="image-div"></div>
      </main>
    </>
  );
}

export default RegisterPage;
