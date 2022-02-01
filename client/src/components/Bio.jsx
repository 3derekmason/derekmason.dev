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
            About Me
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
        <img src={treeBackground} />
        <div className="glass"></div>
        <div className="aboutContent">
          <div className="bioTop">
            <div className="myPic"></div>
            <div style={{ textAlign: "center" }}>
              <h2>Full-Stack Software Engineer</h2>
              <h4>Denver, CO</h4>
            </div>
          </div>
          <div className="bioText">
            <p>
              Yada yada blah blah blah software is interesting and I like
              helping people yada yada yada
            </p>
            <p>
              Yada yada blah blah blah software is interesting and I like
              helping people yada yada yada
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
