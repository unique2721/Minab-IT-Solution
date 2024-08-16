import React from "react";
import "./Projects.css";
const Project = ({ projectImage, projectTilte, projectText, alt }) => {
  return (
    <div className="project">
      <img src={projectImage} alt={alt} />
      <div>
        <h1>{projectTilte}</h1>
        <p>{projectText}</p>
      </div>
    </div>
  );
};

export default Project;
