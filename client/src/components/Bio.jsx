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
              I love seeing people succeed. I'm very passionate about making a
              positive impact on my community and the lives I interact with.
            </p>
            <br />
            <p>
              <strong style={{ letterSpacing: "1.5px" }}>
                Originally, my love
              </strong>{" "}
              of helping and teaching others led me to pursue a career as a
              preschool teacher. At the same time, another passion of mine,
              fitness and health, convinced me to also get certified as a
              Personal Trainer. I was able to help others learn and improve
              quality of life at all ages...
            </p>
            <br />
            <p>
              <strong style={{ letterSpacing: "1.5px" }}>In 2020,</strong> in
              part due to being stuck at home from COVID-19, I started to dip my
              toes into web development. I quickly fell in love with the problem
              solving and algorithms, and enrolled in a reccommended software
              engineering bootcamp as soon as I could. About 3 and a half months
              after diving off the deep end (of JavaScript), I graduated from
              Hack Reactor's Advanced Full Stack Software Engineering Immersive.
            </p>
            <p>
              Since then I've been learning every day, constantly falling in
              love with new languages and technologies. I make the joke with my
              friends that with web development I will never be bored again!
              There is always something exciting or interesting to dig into.
            </p>
            <br />
            <p>
              <strong style={{ letterSpacing: "1.5px" }}>Currently,</strong> I'm
              living in the Denver area. When I'm not coding, I will most likely
              be at the gym, somewhere outside in the sunshine, or watching a
              76ers game! I love prioritizing accessibility when creating pages.
              My goal is to create beautiful applications that are mindfull of
              every potential user.
            </p>
            <br />
            <p>
              Right now I am looking for new opportunities! If you'd like to
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
