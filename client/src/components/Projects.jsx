import React, { useState, useContext } from "react";
import treeBackground from "../../public/assets/trees.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";

import AppContext from "../context.js";
import Home from "./Home.jsx";
import ProjectCard from "./ProjectCard.jsx";
import projectData from "./projectData.js";

const Projects = () => {
  const { currentView, setCurrentView } = useContext(AppContext);
  console.log(projectData);
  return (
    <div className="body">
      <section className="active">
        <header>
          <a href="#" className="logo">
            My Projects
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

export default Projects;
