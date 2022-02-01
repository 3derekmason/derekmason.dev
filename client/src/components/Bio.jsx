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
              Hello! As you saw on the landing page, my name is Derek Mason. I
              am a colorado native with a passion for problem solving and a
              strong desire to see everyone around me succeed.
            </p>
            <p>
              Originally my passion of helping and teaching others led me to be
              a preschool teacher. I love helping to create lifelong learners,
              one reason software development began to call to me is because I
              am a lifelong learner myself! Another passion of mine, fitness and
              health, convinced me to get certified as a Personal Trainer on the
              side. Now I was helping others learn (and improve quality of life)
              at all ages.
            </p>
            <p>
              Then in 2020, my adventure into software development really took
              off. After months of not being able to work due to COVID-19, I
              realized that I needed to work in an industry that couldn't be as
              disrupted by world events. A friend of mine turned me to Galvanize
              / Hack Reactor and the rest was history... I quickly fell in love
              with Javascript and the logical brain puzzles and satisfaction
              upon thier completion. I continued to learn more and graduated
              from Hack Reactor's Software Engineering Immersive in December
              2021. Realizing that there is nothing I couldn't do (and that I
              would never run out of things to stop learning) really solidified
              in my mind that I was really meant to be a developer.
            </p>
            <p>
              Currently, <strong>MERN</strong> (
              <em>MongoDB, Express, React, NodeJS</em>) is probably my favorite
              tech stack to play with, however I have an equal love for the
              front and back end of development.
            </p>
            <p>
              Oh! I'm also looking for work!{" "}
              <a href="mailto:3derekmason@gmail.com">Shoot me a message</a> if
              you'd like to connect.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
