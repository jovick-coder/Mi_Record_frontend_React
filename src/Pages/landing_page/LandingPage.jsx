import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import { NavComponent } from "../../components/NavBar/NavBarComponent";
import { FaAccusoft, FaHeart } from "react-icons/fa";

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

      <section className="feature-section">
        <h1 className="text-center mt-4">Features</h1>

        <div className="d-flex flex-wrap">
          <div className="main-card">Project Manager </div>
          <div className="main-card">Fiance Manager</div>
          <div className="main-card">Reminder</div>
        </div>
        <div className="d-flex flex-wrap">
          <div className="main-card">Social Link Manager</div>
          <div className="main-card">Project Countdown</div>
          <div className="main-card">Portfolio Generator</div>
        </div>
      </section>
      <div class="absolute bottom-0 p-2 text-center w-full flex flex-col ites-center gap-1">
        <p class="text-gray-300 text-sm">
          made with <FaHeart /> by{" "}
          <a
            href="https://github.com/jovick-coder"
            target="_blank"
            rel="noreferrer"
            class="text-cyan-300 underline underline-offset-2 decoration-dotted"
          >
            Josiah Victor
          </a>
        </p>
        <p class="text-gray-300 text-sm">
          for
          <a
            href="https://hashnode.com"
            target="_blank"
            rel="noreferrer"
            class="text-cyan-300 underline underline-offset-2 decoration-dotted"
          >
            hashnode
          </a>{" "}
          x{" "}
          <a
            href="https://planetscale.com"
            target="_blank"
            rel="noreferrer"
            class="text-cyan-300 underline underline-offset-2 decoration-dotted"
          >
            planetscale
          </a>{" "}
          hackathon
        </p>
      </div>
    </>
  );
}

export default LandingPage;
