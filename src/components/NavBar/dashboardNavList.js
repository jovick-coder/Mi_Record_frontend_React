import {
  // BsAward,
  BsBellFill,
  BsCoin,
  BsFillHddStackFill,
  BsHouseFill,
  BsPeople,
  BsPerson,
  // BsPersonBadge,
  BsPersonBoundingBox,
  BsPersonCheck,
  BsPersonPlus,
  BsSave,
  // BsPersonX,
  BsSimFill,
} from "react-icons/bs";
import { AiFillApi } from "react-icons/ai";

export const userNavLinkObject = [
  {
    name: "Home",
    icon: <BsHouseFill />,
    path: "/dashboard/home",
    userPrivilege: 1,
  },
  {
    name: "profile",
    icon: <BsPerson />,
    path: "/dashboard/#",
    userPrivilege: 1,
  },
  // {
  //   name: "History",
  //   icon: <BsFillHddStackFill />,
  //   path: "/dashboard/#",
  //   userPrivilege: 1,
  // },
  // {
  //   name: "Notification",
  //   icon: <BsBellFill />,
  //   path: "/dashboard/#",
  //   userPrivilege: 1,
  // },
  // {
  //   name: "Found Account",
  //   icon: <BsCoin />,
  //   path: "/dashboard/#",
  //   userPrivilege: 1,
  // },
  // {
  //   name: "Buy Subscriptions",
  //   icon: <BsSimFill />,
  //   path: "/dashboard/#",
  //   userPrivilege: 1,
  // },
  // {
  //   name: "Customers List",
  //   icon: <BsPersonCheck />,
  //   path: "/dashboard/#",
  //   userPrivilege: 2,
  // },
  // {
  //   name: "Users List",
  //   icon: <BsPeople />,
  //   path: "/dashboard/#",
  //   userPrivilege: 3,
  // },
  // {
  //   name: "Resellers List",
  //   icon: <BsPersonPlus />,
  //   path: "/dashboard/#",
  //   userPrivilege: 3,
  // },
  // {
  //   name: "Admins List",
  //   icon: <BsPersonBoundingBox />,
  //   path: "/dashboard/#",
  //   userPrivilege: 4,
  // },
  // {
  //   name: "API Dashboard",
  //   icon: <AiFillApi />,
  //   path: "/dashboard/#",
  //   userPrivilege: 4,
  // },
  // {
  //   name: "API History",
  //   icon: <AiFillApi />,
  //   path: "/dashboard/#",
  //   userPrivilege: 4,
  // },
  // {
  //   name: "Confirmation",
  //   icon: <BsSave />,
  //   path: "/dashboard/#",
  //   userPrivilege: 4,
  // },
];
