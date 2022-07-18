import { nanoid } from "nanoid";
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
    id: nanoid(),
    name: "Dashboard",
    icon: <AiFillDashboard />,
    path: "/dashboard/home",
  },
  {
    id: nanoid(),
    name: "Reminder",
    icon: <FaCalendarDay />,
    path: "/dashboard/reminder",
  },
  {
    id: nanoid(),
    name: "Fiances",
    icon: <FaCoins />,
    path: "/dashboard/fiances",
  },
  {
    id: nanoid(),
    name: "Project",
    icon: <FaProjectDiagram />,
    path: "/dashboard/project",
  },
  {
    id: nanoid(),
    name: "Portfolio",
    icon: <FaServer />,
    path: "/dashboard/portfolio",
  },
  {
    id: nanoid(),
    name: "Social Links",
    icon: <FaLink />,
    path: "/dashboard/social-links",
  },
];
