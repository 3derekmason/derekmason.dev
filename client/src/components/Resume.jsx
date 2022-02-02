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
                Chai, Cypress, Jest, K6, Mocha, AWS, Docker, Heroku
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
            <div className="resCard">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                  marginLeft: "4px",
                }}
              >
                <Typography
                  variant="body1"
                  style={{ color: "#bbb", textTransform: "uppercase" }}
                >
                  Atelier System Design
                </Typography>
                <Typography variant="caption">
                  <em>
                    Full backend system design using MongoDB for 10+ million
                    entries for a retail website
                  </em>
                </Typography>
              </div>
              <Typography variant="body2">
                Replaced API of an e-commerce website to handle increase in
                traffic following a Front End revamp
              </Typography>
              <Typography variant="body2">
                Reduced latency from 300ms to under 10ms by strategically
                indexing database collections and refactoring queries for
                optimization
              </Typography>
              <Typography variant="body2">
                Load tested with K6 averaging a response time under 50ms for
                1000 VUs
              </Typography>
            </div>
            <div className="resCard">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "4px",
                  marginLeft: "4px",
                }}
              >
                <Typography
                  variant="body1"
                  style={{ color: "#bbb", textTransform: "uppercase" }}
                >
                  Help Me Out
                </Typography>
                <Typography variant="caption">
                  <em>
                    Full scale production of a community centered handyman app
                  </em>
                </Typography>
              </div>
              <Typography variant="body2">
                Collaborated with seven team members to design and build an app
                according to Client specs
              </Typography>
              <Typography variant="body2">
                Handled user authentication with PassportJS, developed a
                mobile-first responsive UI, and implemented an in-app messaging
                server using Socket.io
              </Typography>
              <Typography variant="body2">
                Deployed app using separate T2 micro instances for main server
                and chat server to optimize scalability
              </Typography>
            </div>
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
