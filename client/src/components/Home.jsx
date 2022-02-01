import React from "react";

import treeBackground from "../../public/assets/trees.jpg";

const Home = () => {
  return (
    <div className="body">
      <section>
        <header>
          <a href="#" className="logo">
            Derek Mason
          </a>
          <div className="menuToggle"></div>
        </header>
        <img src={treeBackground}></img>
      </section>
    </div>
  );
};

export default Home;
