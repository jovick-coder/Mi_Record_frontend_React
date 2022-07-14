import { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext";
import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./Pages/dashboard/Dashboard";
import LandingPage from "./Pages/landing_page/LandingPage";
import LoginPage from "./Pages/login_page/LoginPage";
import RegisterPage from "./Pages/register_page/RegisterPage";
import HomePage from "./Pages/home/HomePage";
import ReminderPage from "./Pages/reminder_page/ReminderPage";
import FiancePage from "./Pages/fiance_page/FiancePage";
import ProjectPage from "./Pages/project_page/ProjectPage";
import PortfolioPage from "./Pages/portfolio_page/PortfolioPage";
import SocialLinksPage from "./Pages/social_links_page/SocialLinksPage";

function App() {
  const { loggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedIn) {
      navigate("/dashboard/home");
    }
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<HomePage />} />
          <Route path="reminder" element={<ReminderPage />} />
          <Route path="fiances" element={<FiancePage />} />
          <Route path="project" element={<ProjectPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="social-links" element={<SocialLinksPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
