import React, { useState, useContext } from "react";
import treeBackground from "../../public/assets/trees.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Card, Grid } from "@mui/material";

const ProjectCard = (props) => {
  const { project } = props;
  return (
    <div>
      <Card
        style={{ width: "100%", background: "yellow", zIndex: "11" }}
        onClick={(e) => {
          e.preventDefault();
          console.log(project);
        }}
      >
        {project.title}
      </Card>
    </div>
  );
};

export default ProjectCard;
