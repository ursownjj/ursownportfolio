import React, { useRef, useEffect } from "react";
import "./Education.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { styles } from "../style";

function Education() {
  gsap.registerPlugin(ScrollTrigger);

  const edu1 = useRef();
  const edu2 = useRef();
  const edu3 = useRef();

  useEffect(() => {
    gsap.from(
      edu1.current,

      {
        duration: 0.6,
        scaleX: 0.1,
        transformOrigin: "left",
        delay: 0.3,
        repeat: 0,
        opacity: 0,
        scrollTrigger: {
          trigger: edu1.current,
        },
      },

      []
    );
    gsap.fromTo(
      edu2.current,

      { opacity: 0, y: 200 },
      {
        duration: 0.5,
        y: 0,
        delay: 0.4,
        stagger: 0.3,
        opacity: 1,
        scrollTrigger: {
          trigger: edu2.current,
          start: "top 80%",
        },
      },

      []
    );
    gsap.fromTo(
      edu3.current,

      { opacity: 0, y: 200 },
      {
        duration: 0.5,
        y: 0,
        delay: 0.4,
        stagger: 0.3,
        opacity: 1,

        scrollTrigger: {
          trigger: edu3.current,
          start: "top 80%",
          marker: true,
        },
      },

      []
    );
  }, []);

  return (
    <section
      className={`${styles.paddingX} education-section  mx-auto`}
      id="education"
    >
      <div className="wrapper">
        <p className={`${styles.sectionSubText} text-center`}>Education</p>
        <div className="flex flex-col items-center">
          <h2 className={`${styles.sectionHeadText} text-center`}>
            My Educational Qualification
          </h2>
          <ul className="dottedLine ">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        
        
          
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="349.326"
            height="165.403"
            viewBox="0 0 349.326 165.403"
            data-inject-url="https://linksome.me/s/app/themes/linksome/dist/images/path-landing-3.svg"
            data-animation="draw-svg"
            className="content-image__path content-image__path--3 injectable"
          >
            <path
              d="M1276,1734s38,49.127,166.072,70.449,179.053,90.753,179.053,90.753"
              transform="translate(-1273.895 -1731.896)"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeWidth="3"
              strokeDasharray="10"
              opacity="0.2"
            ></path>
          </svg>
        </div>

        <div className="container">
          <div className="row flex ">
            <div className="empty-row"></div>
            <div className="educational-qualification" ref={edu2}>
              <div className="content">
                <h3 className="qualification">
                Diploma In Computer Science Engineering
                </h3>
                <button className="button">2020 - 2023</button>
                <span>Educational Institute: </span>
                <h4 className="college">SANJAY GANDHI POLYTECNIC</h4>
                <div className="skills">
                  <h3>Skills and Knowledge learnt</h3>
                  <ul>
                    <li></li>
                    <li>- Cloud Computing</li>
                    <li>- Data Communication and Networks</li>
                    <li>- Full Stack Development</li>
                    <li>- Systems Analysis and Design</li>
                    <li>
                      - Understanding of various protocols and their roles in
                      communication.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://linksome.me/s/app/themes/linksome/dist/images/path-landing-2.svg"
            data-animation="draw-svg"
            className="content-image__path content-image__path--2"
            alt="Path"
          ></img>
        </div>
        <div className="container">
          <div className="row flex">
            <div className="educational-qualification" ref={edu3}>
              <div className="content">
                <h3 className="qualification">Pursuing Btech In Data Science</h3>
                <button className="button">2023</button>
                <span>Educational Institute: </span>
                <h4 className="college">RNS Institute of Technology (RNSIT)</h4>
                
              </div>
            </div>
            <div className="empty-row"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
