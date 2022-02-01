import React, { useState } from "react";

import treeBackground from "../../public/assets/trees.jpg";

const Home = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const sectionClass = menuToggle ? "active" : "";
  const toggleClass = menuToggle ? "menuToggleActive" : "menuToggle";
  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
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
        <img src={treeBackground}></img>
        <ul className="social">
          <li style={{ transitionDelay: "0.2s" }}>
            <a href="#">LinkedIn</a>
          </li>
          <li style={{ transitionDelay: "0.2s" }}>
            <a href="#">Github</a>
          </li>
          <li style={{ transitionDelay: "0.2s" }}>
            <a href="#">Twitter</a>
          </li>
        </ul>
        <ul className="navigation">
          <li style={{ transitionDelay: "0.2s" }}>
            <a href="#">Home</a>
          </li>
          <li style={{ transitionDelay: "0.4s" }}>
            <a href="#">About Me</a>
          </li>
          <li style={{ transitionDelay: "0.6s" }}>
            <a href="#">Projects</a>
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
