import React, { useState, useContext } from "react";
import treeBackground from "../../public/assets/trees.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";

import AppContext from "../context.js";
import Home from "./Home.jsx";
import Resume from "./Resume.jsx";
import Bio from "./Bio.jsx";
import ProjectCard from "./ProjectCard.jsx";
import projectData from "./projectData.js";
import { Grid } from "@mui/material";

const Projects = () => {
  const { currentView, setCurrentView } = useContext(AppContext);
  return (
    <div className="body" style={{ background: "#212121" }}>
      <section className="active">
        <header>
          <a href="#" className="logo">
            My Projects
          </a>
          <div className="btnRow">
            <div
              className="homeBtn"
              onClick={(e) => {
                e.preventDefault();
                setCurrentView(<Bio />);
              }}
            >
              ABOUT
            </div>
            <div
              className="homeBtn"
              onClick={(e) => {
                e.preventDefault();
                setCurrentView(<Resume />);
              }}
            >
              RESUME
            </div>
            <div
              className="homeBtn"
              onClick={(e) => {
                e.preventDefault();
                setCurrentView(<Home />);
              }}
            >
              HOME
            </div>
          </div>
        </header>
        {/* <img src={treeBackground} /> */}
        <div className="glass"></div>
        <div className="projectContent">
          <Grid container spacing={2}>
            {projectData?.map((project, i) => {
              return (
                <Grid item xs={12} sm={6} key={i}>
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
