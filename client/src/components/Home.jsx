import React, { useState, useContext } from "react";

import treeBackground from "../../public/assets/trees.jpg";
import logo from "../../public/assets/derekMason.png";

import AppContext from "../context.js";
import AboutMe from "./Bio.jsx";
import Resume from "./Resume.jsx";

const Home = () => {
  const { currentView, setCurrentView } = useContext(AppContext);
  const [menuToggle, setMenuToggle] = useState(false);
  const sectionClass = menuToggle ? "active" : "";
  const toggleClass = menuToggle ? "menuToggleActive" : "menuToggle";
  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };
  const handleAbout = () => {
    setMenuToggle(false);
    setCurrentView(<AboutMe />);
  };
  const handleResume = () => {
    setMenuToggle(false);
    setCurrentView(<Resume />);
  };
  return (
    <div className="body">
      <section className={sectionClass}>
        <header>
          <a href="#" className="logo">
            Derek Mason
          </a>
          <div className={toggleClass} onClick={toggleMenu}></div>
        </header>
        <img src={treeBackground} />
        <ul className="social">
          <li style={{ transitionDelay: "0.2s" }}>
            <a href="https://www.linkedin.com/in/3derekmason/" target="_new">
              LinkedIn
            </a>
          </li>
          <li style={{ transitionDelay: "0.4s" }}>
            <a href="https://github.com/3derekmason" target="_new">
              Github
            </a>
          </li>
          <li style={{ transitionDelay: "0.6s" }}>
            <a href="https://twitter.com/3derekmason" target="_new">
              Twitter
            </a>
          </li>
        </ul>
        <ul className="navigation">
          <li style={{ transitionDelay: "0.2s" }}>
            <a href="#" onClick={handleAbout}>
              About Me
            </a>
          </li>
          <li style={{ transitionDelay: "0.4s" }}>
            <a href="#" onClick={handleResume}>
              Resume
            </a>
          </li>
          <li style={{ transitionDelay: "0.6s" }}>
            <a onClick={toggleMenu}>Projects</a>
          </li>
        </ul>
        <div className="glass"></div>
        <div className="content">
          <h2>
            Hi there! <br />
            <span>My name is Derek.</span>
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Home;
