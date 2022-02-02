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
                  Island Walk
                </Typography>
                <Typography variant="caption">
                  <em>UX/UI modernization of a retail website</em>
                </Typography>
              </div>
              <Typography variant="body2">
                Redesigned and implemented a ratings and reviews section to show
                off product information
              </Typography>
              <Typography variant="body2">
                Coordinated with team members to determine the most efficient
                way to reuse and connect React components
              </Typography>
              <Typography variant="body2">
                Utilized Lighthouse testing to bring performance scores from 50
                to 90, with accessibility, best practices, and SEO scores of 100
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
                  variant="caption"
                  style={{ color: "#fff", textTransform: "uppercase" }}
                >
                  HONERABLE MENTION
                </Typography>
                <Typography variant="caption">
                  <em>Solo Personal Projects</em>
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="BUTTON" style={{ color: "#bbb" }}>
                  SteMVP
                </Typography>{" "}
                <Typography variant="caption">
                  A full scale application for ECE Instructors made in a two day
                  timebox with React and PostgreSQL
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="BUTTON" style={{ color: "#bbb" }}>
                  MyTrainingLogApp
                </Typography>{" "}
                <Typography variant="caption">
                  A full-stack MERN application for logging user workout stats
                </Typography>
              </div>
            </div>
          </div>
          <div className="experience">
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
              Professional Experience
            </Typography>
            <div className="expCard">
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
                  variant="caption"
                  style={{ color: "#eee", textTransform: "uppercase" }}
                >
                  Early Childhood Gym Instructor{" "}
                  <em>(Bright Horizons, Loveland CO)</em>
                </Typography>
                <Typography variant="caption">
                  <em>2019 - 2021</em>
                </Typography>
              </div>
              <Typography variant="body2">
                Designed a curriculum of age appropriate activities for groups
                (ages 2-6) that encouraged physical and mental development.
              </Typography>
              <Typography variant="body2">
                Spearheaded 5 weekly lesson plans with a recyclable structure so
                that curriculum could easily be followed by other teachers.
              </Typography>
            </div>
            <div className="expCard">
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
                  variant="caption"
                  style={{ color: "#eee", textTransform: "uppercase" }}
                >
                  Certified Personal Trainer{" "}
                  <em>(Genesis Health Clubs, Fort Collins CO)</em>
                </Typography>
                <Typography variant="caption">
                  <em>2020 - 2021</em>
                </Typography>
              </div>
              <Typography variant="body2">
                Created safe and effective exercise programs tailored
                individually for clients (ages 16 - 70) that helped push each
                towards their individual goals.
              </Typography>
              <Typography variant="body2">
                Performed fitness assessments to gauge current fitness levels
                and discussed desired training outcomes of new gym members, as
                well as outlined programs/strategies to get them there.
              </Typography>
            </div>
            <div className="expCard">
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
                  variant="caption"
                  style={{ color: "#eee", textTransform: "uppercase" }}
                >
                  Preschool Teacher{" "}
                  <em>(Bright Horizons, Loveland/Fort Collins CO)</em>
                </Typography>
                <Typography variant="caption">
                  <em>2017 - 2019</em>
                </Typography>
              </div>
              <Typography variant="body2">
                Inspired young classes of 12 - 28 three and four year olds by
                leading them through age appropriate activities and lessons that
                pushed creative thinking and crucial development
              </Typography>
            </div>
          </div>
          <div className="education"></div>
          <div className="resumeFooter"></div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
