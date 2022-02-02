import React, { useState, useContext } from "react";
import treeBackground from "../../public/assets/trees.jpg";

import AppContext from "../context.js";
import Home from "./Home.jsx";

const Resume = () => {
  const { currentView, setCurrentView } = useContext(AppContext);
  return (
    <div className="body">
      <section className="active">
        <header>
          <a href="#" className="logo">
            Resume
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
      </section>
    </div>
  );
};

export default Resume;
