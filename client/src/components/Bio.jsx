import React, { useState, useContext } from "react";
import treeBackground from "../../public/assets/trees.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
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
              <strong style={{ letterSpacing: "1.5px" }}>Hello!</strong> As you
              saw on the landing page, <strong>my name is Derek Mason</strong>.
              I am a Colorado native with a passion for problem solving and a
              strong desire to see those around me solve thier problems as well.
            </p>
            <br />
            <p>
              <strong style={{ letterSpacing: "1.5px" }}>
                Originally, my love
              </strong>{" "}
              of helping and teaching others led me to be a preschool teacher.
              My joy in creating lifelong learners is one reason that software
              development began to call to me, because I am a lifelong learner
              myself! Another passion of mine, fitness and health, convinced me
              to also get certified as a Personal Trainer. I was able to help
              others learn and improve quality of life at all ages. It is very
              important to me that what I do will benefit my community.
            </p>
            <br />
            <p>
              <strong style={{ letterSpacing: "1.5px" }}>In 2020,</strong> my
              adventure into software development really took off... After
              months of not being able to work due to COVID-19, I realized that
              I wanted and needed to be in an industry that couldn't be as
              disrupted by world events. A friend of mine turned me to
              Galvanize/Hack Reactor and I began researching and took time to
              learn some of the Javascript basics. I quickly fell in love with
              the puzzles I was experiencing (and of course the satisfaction
              upon their completion). I continued to learn more and pushed
              myself through months of 12 hour coding days. I built Full Stack
              applications with a some awesome teams, eventually leading to my
              graduation of Hack Reactor's Software Engineering Immersive in
              December 2021.
            </p>
            <br />
            <p>
              <strong style={{ letterSpacing: "1.5px" }}>Currently,</strong> I'm
              living in the Denver area. When I'm not coding, I will most likely
              be at the gym, somewhere outside in the sunshine, or watching a
              76ers game, <strong>Trust the Process</strong>! My favorite tech
              stack to play with right now is probably MERN,{" "}
              <em>MongoDB, ExpressJS, React, NodeJS</em>. I love creating pages
              that are accessible, stimulating, and satisfying for the user. On
              the flip side, I thoroughly enjoy building organized and high
              performance APIs on the back end! Tell me about an exciting new
              technology and I will most likely soon be experimenting with it
              myself.
            </p>
            <br />
            <p>
              I'm also currently looking for new opportunities! If you'd like to
              connect with me,{" "}
              <a href="mailto:3derekmason@gmail.com">shoot me an email</a> or
              check out any of my social profiles below.
            </p>
            <br />
            <p>
              <strong style={{ letterSpacing: "1.5px" }}>
                Thanks for reading!
              </strong>
            </p>
            <br />
          </div>
          <div className="socialBtns">
            <a href="https://www.linkedin.com/in/3derekmason/" target="_blank">
              <LinkedInIcon style={{ fontSize: "1.5em" }} />
            </a>
            <a href="https://www.github.com/3derekmason" target="_blank">
              <GitHubIcon style={{ fontSize: "1.5em" }} />
            </a>
            <a href="https://www.twitter.com/3derekmason/" target="_blank">
              <TwitterIcon style={{ fontSize: "1.5em" }} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
