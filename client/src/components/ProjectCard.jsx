import React, { useState, useContext } from "react";
import treeBackground from "../../public/assets/trees.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Card, Button, Grid, Typography } from "@mui/material";

const ProjectCard = (props) => {
  const { project } = props;
  return (
    <div className="cardAnimate">
      <Card
        className="projectCard"
        style={{ background: "rgba(0,0,0,0.2)", color: "#fff" }}
      >
        <div className="cardLeft">
          <div className="cardTitle">
            <Typography
              variant="h5"
              style={{ marginBottom: "8px", letterSpacing: "3px" }}
            >
              {project.title}
            </Typography>
            <Typography variant="caption">
              <em>{project.subtitle}</em>
            </Typography>
          </div>
          <div className="cardSummary">
            <Typography variant="body1">{project.summary}</Typography>
          </div>
        </div>
        <div className="cardRight">
          <div className="cardImg" style={{ height: "60%", width: "100%" }}>
            <img
              src={project.imgURL}
              style={{ width: "100%", height: "40%" }}
            ></img>
            <img
              src={project.imgURL2}
              style={{ width: "100%", height: "40%" }}
            ></img>
          </div>
          <div className="cardButtons" style={{ height: "20%" }}>
            <Button>
              <a href={project.code} target="_blank">
                View Code
              </a>
            </Button>
            {project.deployed ? (
              <Button>
                <a href={project.deployed} target="_blank">
                  Go to App
                </a>
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
