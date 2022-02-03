import React, { useState, useContext } from "react";
import treeBackground from "../../public/assets/trees.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Card, Button, Grid, Typography } from "@mui/material";

const ProjectCard = (props) => {
  const { project } = props;
  return (
    <div>
      <Card
        className="projectCard"
        style={{ background: "rgba(0,0,0,0.2)", color: "#fff" }}
      >
        <div className="cardLeft">
          <div className="cardTitle">
            <Typography variant="h5" style={{ marginBottom: "8px" }}>
              {project.title}
            </Typography>
            <Typography variant="caption">{project.subtitle}</Typography>
          </div>
          <div className="cardSummary">
            <Typography variant="body2">{project.summary}</Typography>
          </div>
        </div>
        <div className="cardRight">
          <div className="cardImg" style={{ height: "60%", width: "100%" }}>
            <img
              src={project.imgURL}
              style={{ width: "100%", height: "60%" }}
            ></img>
          </div>
          <div className="cardButtons" style={{ height: "40%" }}>
            <Button href={project.code} target="_blank" className="goTo">
              View Code
            </Button>
            {project.deployed ? (
              <Button href={project.deployed} target="_blank" className="goTo">
                Go to App
              </Button>
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
