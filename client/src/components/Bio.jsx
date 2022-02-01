import React, { useState, useContext } from "react";
import treeBackground from "../../public/assets/trees.jpg";

import AppContext from "../context.js";
import Home from "./Home.jsx";

const AboutMe = () => {
  const { currentView, setCurrentView } = useContext(AppContext);
  return (
    <div className="body">
      <section className="active">
        <header>
          <a href="#" className="logo">
            Derek Mason
          </a>
          <div
            className="homeBtn"
            onClick={(e) => {
              e.preventDefault();
              setCurrentView(<Home />);
            }}
          >
            HOME
          </div>
        </header>
        <h2>About Page</h2>
        <img src={treeBackground} />
        <div className="glass"></div>
        <div className="aboutContent">
          <h2>Full-Stack Software Engineer</h2>
          <span>
            <h4>Denver, CO</h4>
          </span>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
