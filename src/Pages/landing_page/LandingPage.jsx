import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import NavComponent from "../../components/nav/NavComponent";

function LandingPage() {
  return (
    <>
      <NavComponent />
      <section id="hero-section">
        <div className="text-over-image">
          <Logo />
          <h1>Mi_Records</h1>
          <p>Your Digital Self Management System</p>
          <Link to={"./login"}>
            {/* <a href=""> */} <button>Start Now</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
