import React, { useState, useContext } from "react";
import treeBackground from "../../public/assets/trees.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import BookIcon from "@mui/icons-material/Book";

import { Button, Typography } from "@mui/material";

import AppContext from "../context.js";
import Home from "./Home.jsx";

const Resume = () => {
  const { currentView, setCurrentView } = useContext(AppContext);
  return (
    <div className="body">
      <section className="active">
        <header id="top">
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
        {/* <img src={treeBackground} /> */}
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
              <a href="https://www.medium.com/@derekmason" target="_blank">
                <BookIcon />
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
                JavaScript, NextJS, React, Redux, RedwoodJS, Svelte, Vue,
                Bootstrap, MaterialUI, Vuetify
              </Typography>
            </Typography>
            <Typography variant="body2">
              Back End |
              <Typography variant="caption" style={{ marginLeft: "2px" }}>
                NodeJS, Express, PostgreSQL, MongoDB, MySQL, Ruby on Rails
              </Typography>
            </Typography>
            <Typography variant="body2">
              Testing & Deployment |
              <Typography variant="caption" style={{ marginLeft: "2px" }}>
                Jest, Chai, AWS, Heroku, Vercel
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
                  <a href="https://github.com/HydraSDC/qAndAPI" target="_blank">
                    Atelier System Design
                  </a>
                </Typography>
                <Typography variant="caption">
                  <em>
                    API design with MongoDB storing over one million entries for
                    a retail website
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
                  <a href="https://boop-park.vercel.app" target="_blank">
                    Boop Park
                  </a>
                </Typography>
                <Typography variant="caption">
                  <em>A full stack training app made with NextJS</em>
                </Typography>
              </div>
              <Typography variant="body2">
                Built and deployed full scale app using document driven
                development and best accessibility practices
              </Typography>
              <Typography variant="body2">
                Handled user authentication with bcrypt.js and designed a custom
                API using ExpressJS and MongoDB
              </Typography>
              <Typography variant="body2">
                Populated public database with 15 personally written and
                researched training programs intended to improve user’s quality
                of life
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
                  <a
                    href="https://www.npmjs.com/package/relative-time-ago"
                    target="_blank"
                  >
                    relativeTimeAgo
                  </a>
                </Typography>
                <Typography variant="caption">
                  <em>Public npm package for use in blogs/social media etc</em>
                </Typography>
              </div>
              <Typography variant="body2">
                Built helper function optimized for both performance, edge
                cases, and readability
              </Typography>
              <Typography variant="body2">
                99 user downloads in first week of release
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
                  OTHER FEATURED PROJECTS
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="BUTTON"
                  style={{ color: "#bbb", marginRight: "8px" }}
                >
                  <a
                    href="https://github.com/3derekmason/diabetes-management-log/"
                    targe="_blank"
                  >
                    Diabetes Management Log
                  </a>
                </Typography>{" "}
                <Typography variant="caption">
                  A blood glucose tracker with custom UI and API
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="BUTTON"
                  style={{ color: "#bbb", marginRight: "8px" }}
                >
                  <a
                    href="https://mytraininglogapp.herokuapp.com/"
                    target="_blank"
                  >
                    MyTrainingLogApp
                  </a>
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
                  variant="subtitle1"
                  style={{ color: "#fff", textTransform: "uppercase" }}
                >
                  Early Childhood Gym Instructor{" "}
                  <em>(Bright Horizons, Loveland CO)</em>
                </Typography>
                <Typography variant="caption">
                  <em>2019 - 2021</em>
                </Typography>
              </div>
              <Typography variant="caption">
                Designed a curriculum of age appropriate activities for groups
                (ages 2-6) that encouraged physical and mental development.
              </Typography>
              <Typography variant="caption">
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
                  variant="subtitle1"
                  style={{ color: "#fff", textTransform: "uppercase" }}
                >
                  Certified Personal Trainer{" "}
                  <em>(Genesis Health Clubs, Fort Collins CO)</em>
                </Typography>
                <Typography variant="caption">
                  <em>2020 - 2021</em>
                </Typography>
              </div>
              <Typography variant="caption">
                Created safe and effective exercise programs tailored
                individually for clients (ages 16 - 70) that helped push each
                towards their individual goals.
              </Typography>
              <Typography variant="caption">
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
                  variant="subtitle1"
                  style={{ color: "#fff", textTransform: "uppercase" }}
                >
                  Preschool Teacher{" "}
                  <em>(Bright Horizons, Loveland/Fort Collins CO)</em>
                </Typography>
                <Typography variant="caption">
                  <em>2017 - 2019</em>
                </Typography>
              </div>
              <Typography variant="caption">
                Inspired young classes of 12 - 28 three and four year olds by
                leading them through age appropriate activities and lessons that
                pushed creative thinking and crucial development
              </Typography>
            </div>
          </div>
          <div className="education">
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
              Education
            </Typography>
            <div className="edCard">
              <Typography variant="button">Hack Reactor</Typography>
              <Typography variant="caption">
                Denver, CO <em>2021</em>
              </Typography>
            </div>
            <div className="edCard">
              <Typography variant="button">
                Colorado State University
              </Typography>
              <Typography variant="caption">
                Fort Collins, CO <em>2012 - 2017</em>
              </Typography>
            </div>
          </div>
          <div className="resumeFooter">
            <Button>
              <a href="#top">Back to top</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
