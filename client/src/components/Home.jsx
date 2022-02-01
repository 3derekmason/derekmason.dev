import React, { useState } from "react";

import treeBackground from "../../public/assets/trees.jpg";

const Home = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const sectionClass = menuToggle ? "active" : "";
  const toggleClass = menuToggle ? "menuToggleActive" : "menuToggle";
  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <div className="body">
      <section className={sectionClass}>
        <header>
          <a href="#" className="logo">
            Derek Mason
          </a>
          <div className={toggleClass} onClick={toggleMenu}></div>
        </header>
        <img src={treeBackground}></img>
        <div className="glass"></div>
        <div class="content">
          <h2>
            Hi there! <br />
            <span>My name is Derek.</span>
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Home;
