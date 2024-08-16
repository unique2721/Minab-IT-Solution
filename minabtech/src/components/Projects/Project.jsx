import React from "react";
import "./Projects.css";
const Project = ({ projectImage, projectTilte, projectText, alt }) => {
  return (
    <div className="projectt">
      <img src={projectImage} alt={alt} />
      <div>
        <h1>{projectTilte}</h1>
        <p>{projectText}</p>
        <span>Explore More</span>
      </div>
    </div>
  );
};

export default Project;
