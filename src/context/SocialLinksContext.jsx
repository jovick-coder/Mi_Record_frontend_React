import React, { createContext, useState } from "react";
import { FaGithub } from "react-icons/fa";

export const SocialLinksContext = createContext();

export function UserProvider({ children }) {
  const [socialLinks, setSocialLinks] = useState([
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/jovick-coder/",
    },
  ]);

  return (
    <SocialLinksContext.Provider value={{ socialLinks, setSocialLinks }}>
      {children}
    </SocialLinksContext.Provider>
  );
}
