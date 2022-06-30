import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import { NavComponent } from "../../components/NavBar/NavBarComponent";
import { FaAccusoft } from "react-icons/fa";

function LandingPage() {
  return (
    <>
      <NavComponent />
      <section id="hero-section">
        <div className="text-over-image">
          <FaAccusoft style={{ width: "50px", height: "50px" }} />
          <h1>Mi_Records</h1>
          <p>Your Digital Self Management System</p>
          <Link to={"./login"}>
            <button>Start Now</button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
