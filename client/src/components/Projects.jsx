import React, { useState, useContext } from "react";
import treeBackground from "../../public/assets/trees.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";

import AppContext from "../context.js";
import Home from "./Home.jsx";
import ProjectCard from "./ProjectCard.jsx";
import projectData from "./projectData.js";
import { Grid } from "@mui/material";

const Projects = () => {
  const { currentView, setCurrentView } = useContext(AppContext);
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
        <div className="projectContent">
          <Grid container spacing={4}>
            {projectData?.map((project, i) => {
              return (
                <Grid item xs={6} key={i}>
                  <ProjectCard project={project} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      </section>
    </div>
  );
};

export default Projects;
