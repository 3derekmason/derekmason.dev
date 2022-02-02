import React, { useState, useContext } from "react";
import treeBackground from "../../public/assets/trees.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Typography } from "@mui/material";

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
        <div className="resumeContent">
          <div className="resumeHeader">
            <Typography element="h3" variant="h4">
              Derek Mason
            </Typography>
            <Typography element="h4" variant="caption">
              Denver, CO |{" "}
              <a href="mailto:3derekmason@gmail.com">3derekmason@gmail.com</a> |{" "}
              <a href="tel:970-551-9044">970-551-9044</a>
            </Typography>
            <Typography
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                gap: "32px",
                marginTop: "4px",
              }}
            >
              <a
                href="https://www.linkedin.com/in/3derekmason/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a href="https://www.github.com/3derekmason" target="_blank">
                <GitHubIcon />
              </a>
            </Typography>
          </div>
          <div className="techSkills">
            <Typography
              variant="h5"
              style={{
                width: "66%",
                borderBottom: "1px solid #fff",
                textAlign: "center",
                textTransform: "uppercase",
                marginBottom: "2px",
                letterSpacing: "2px",
              }}
            >
              Technical Skills
            </Typography>
            <Typography variant="body2">
              Front End |
              <Typography variant="caption" style={{ marginLeft: "2px" }}>
                JavaScript, NextJS, React, React Router, Redux, Vue, HTML5,
                CSS3, MaterialUI, ThemeUI
              </Typography>
            </Typography>
            <Typography variant="body2">
              Back End |
              <Typography variant="caption" style={{ marginLeft: "2px" }}>
                Express, GraphQL, NodeJS, MongoDB, MySQL, PostgreSQL, RESTful
                API Development
              </Typography>
            </Typography>
            <Typography variant="body2">
              Testing/Deployment |
              <Typography variant="caption" style={{ marginLeft: "2px" }}>
                Chai, Cypress, Jest, Mocha, AWS, Docker, Heroku
              </Typography>
            </Typography>
            <Typography variant="body2">
              Development Tools |
              <Typography variant="caption" style={{ marginLeft: "2px" }}>
                Babel, ESLint, Git, npm, Postman, Webpack
              </Typography>
            </Typography>
          </div>
          <div className="softwareEngineering">
            <Typography
              variant="h5"
              style={{
                width: "66%",
                borderBottom: "1px solid #fff",
                textAlign: "center",
                textTransform: "uppercase",
                marginBottom: "2px",
                letterSpacing: "2px",
              }}
            >
              Software Engineering
            </Typography>
          </div>
          <div className="experience"></div>
          <div className="education"></div>
          <div className="resumeFooter"></div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
