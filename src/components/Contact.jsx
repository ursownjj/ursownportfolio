import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import { styles } from "../style";
import "./conect.scss";
import { EarthCanvas } from "./canvas";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

import YouTubeIcon from "@mui/icons-material/YouTube";
import Earth from "./canvas/Earth";

import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import "./footer.css";

const title = {
  initial: {
    y: "20%",
    Opacity: 0,
  },
  animate: {
    y: 0,
    Opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 1,
    },
  },
};

const Contact = () => {
    const titleRef = useRef();
  const titleView = useInView(titleRef, { margin: "-200px" });



          
       

  return (
    <motion.div
      ref={titleRef}
      variants={title}
      initial="initial"
      animate={titleView && "animate"}
      className={`${styles.paddingX} mx-auto pt-[200px] max-w-[1400px] pb-[200px] relative z-0`}
      id="contact"
    >
      <p className={`${styles.sectionSubText} text-center`}>Let's Connect</p>
      <div className="flex flex-col items-center">
        <h2 className={`${styles.sectionHeadText} text-center`}>Contact Me</h2>
        <ul className="dottedLine ">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="connect-section flex justify-center items-start pt-10">
        <div className="h-[500px] flex-1 max-sm:w-full ">
          <Earth></Earth>
        </div>
       
          <ul className="header-social">
            
            <li>
              <a href="https://www.linkedin.com/in/ursownjj/" className="rounded-circle linkedIn-link">
                {" "}
                <LinkedInIcon className="linkedIn" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ursown.jj/" className="rounded-circle instagram-link">
                {" "}
                <InstagramIcon className="instagram" />
              </a>
            </li>
            
            <li>
              <a href="https://www.youtube.com/channel/UC74cMTtt4ZrsCdxSXcjMx5A" className="rounded-circle youtube-link">
                {" "}
                <YouTubeIcon className="youtube " />
              </a>
            </li>
          </ul>
          

           

             
         
            
       
      </div>
    </motion.div>
  );
};

export default Contact;
