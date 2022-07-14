import { AiFillDashboard } from "react-icons/ai";
import {
  FaCalendarDay,
  FaCoins,
  FaLink,
  FaProjectDiagram,
  FaServer,
} from "react-icons/fa";

export const userNavLinkObject = [
  {
    name: "Dashboard",
    icon: <AiFillDashboard />,
    path: "/dashboard/home",
  },
  {
    name: "Reminder",
    icon: <FaCalendarDay />,
    path: "/dashboard/reminder",
  },
  {
    name: "Fiances",
    icon: <FaCoins />,
    path: "/dashboard/fiances",
  },
  {
    name: "Project",
    icon: <FaProjectDiagram />,
    path: "/dashboard/project",
  },
  {
    name: "Portfolio",
    icon: <FaServer />,
    path: "/dashboard/portfolio",
  },
  {
    name: "Social Links",
    icon: <FaLink />,
    path: "/dashboard/social-links",
  },
];
