import React from "react";
import { styles } from "../style";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";

function Footer() {
  return (
    <footer
      className={`  bg-black  py-2 mx-auto flex items-center justify-center`}
    >
      <div
        className={`${styles.paddingX} flex justify-between w-full items-center max-w-[1400px] max-md:flex-col`}
      >
        <div className=" text-center text-[16px] max-sm:text-[14px] ">
          <p className="copyright-text ">
            Created By <a href="https://www.linkedin.com/in/ursownjj/"><span className="text-green font-semibold">JoshvaJoshy</span></a> |
            &copy; 2024 All rights reserved
          </p>
        
        </div>
        
        </div>

    </footer>
  );
}

export default Footer;
