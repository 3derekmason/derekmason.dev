import React, { useState, useContext } from "react";
import treeBackground from "../../public/assets/trees.jpg";

import AppContext from "../context";

const AboutMe = () => {
  return (
    <div className="body">
      <section className="active">
        <h2>About Page</h2>
        <img src={treeBackground} />
        <div className="glass"></div>
      </section>
    </div>
  );
};

export default AboutMe;
