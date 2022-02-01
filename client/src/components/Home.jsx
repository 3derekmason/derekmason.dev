import React, { useState } from "react";

import treeBackground from "../../public/assets/trees.jpg";

const Home = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleClass = menuToggle ? "menuToggleActive" : "menuToggle";
  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <div className="body">
      <section>
        <header>
          <a href="#" className="logo">
            Derek Mason
          </a>
          <div className={toggleClass} onClick={toggleMenu}></div>
        </header>
        <img src={treeBackground}></img>
      </section>
    </div>
  );
};

export default Home;