import React, { useState, useContext } from "react";
import treeBackground from "../../public/assets/trees.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Card, Button, Grid, Typography } from "@mui/material";

const ProjectCard = (props) => {
  const { project } = props;
  return (
    <div>
      <Card>
        <div className="cardLeft">
          <div className="cardTitle">
            <Typography variant="h3">{project.title}</Typography>
            <Typography variant="subtitle1">{project.subtitle}</Typography>
          </div>
          <div className="cardSummary"></div>
        </div>
        <div className="cardRight">
          <div className="cardImg"></div>
          <div className="cardButtons">
            <Button href={project.code}>View Code</Button>
            {project.deployed ? (
              <Button href={project.deployed}>Go to App</Button>
            ) : (
              ""
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
