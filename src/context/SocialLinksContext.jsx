import { nanoid } from "nanoid";
import React, { createContext, useState } from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

export const SocialLinksContext = createContext();

export function SocialLinksProvider({ children }) {
  const [socialLinks, setSocialLinks] = useState([
    {
      linkId: nanoid(),
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/jovick-coder/",
    },
    {
      linkId: nanoid(),
      name: " Twitter",
      icon: <FaTwitter />,
      link: "https:// twitter.com/jovick-coder/",
    },
  ]);

  return (
    <SocialLinksContext.Provider value={{ socialLinks, setSocialLinks }}>
      {children}
    </SocialLinksContext.Provider>
  );
}
