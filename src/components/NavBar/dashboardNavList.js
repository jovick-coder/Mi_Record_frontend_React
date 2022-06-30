import { BsPerson } from "react-icons/bs";
import { AiFillDashboard } from "react-icons/ai";
import { FaCoins } from "react-icons/fa";

export const userNavLinkObject = [
  {
    name: "Dashboard",
    icon: <AiFillDashboard />,
    path: "/dashboard/home",
  },
  {
    name: "profile",
    icon: <BsPerson />,
    path: "/dashboard/#",
  },

  {
    name: "Fiances",
    icon: <FaCoins />,
    path: "/dashboard/#",
  },
];
