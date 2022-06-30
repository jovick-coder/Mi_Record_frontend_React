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
    path: "/dashboard/#",
  },
  {
    name: "Fiances",
    icon: <FaCoins />,
    path: "/dashboard/#",
  },
  {
    name: "Project",
    icon: <FaProjectDiagram />,
    path: "/dashboard/#",
  },
  {
    name: "Portfolio",
    icon: <FaServer />,
    path: "/dashboard/#",
  },
  {
    name: "Social Links",
    icon: <FaLink />,
    path: "/dashboard/#",
  },
];
