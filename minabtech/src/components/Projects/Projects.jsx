import React from "react";
import Project from "./Project";
import "./Projects.css";
/* project images */
import hahu from "../../assets/hahujob.webp";
import minabdigital from "../../assets/minabdigital.webp";
import minabdmbs from "../../assets/minabdmbs.webp";
const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <p>
        Below are some of our notable products and projects. We have
        successfully developed and delivered multiple projects. Among other
        below are some of our large-scale engagement and products currently
        actively serving our clients as well as users.
      </p>
      <div className="project">
        <Project
          projectImage={hahu}
          projectTilte={"Hahu Jobs"}
          projectText={
            "HaHuJobs a cloud services operating to capture structured data of the Ethiopian skilled and non-skilled labor market through digitally connecting thousands of job seekers in major Ethiopian cities as well as industrial parks. The platform in a collection of micro services groped to compose web application modules that offer a set of functionalities. HaHuJobs is an electronic product sold as service to a category of clients as per their specific needs in the labor market of Ethiopia. It features various service categories which revolves around data driven job matching of the right candidate"
          }
          alt={"hahu jobs"}
        />
        <Project
          projectImage={minabdmbs}
          projectTilte={"Minab BMS"}
          projectText={
            "Minab BMS is a system that allows the client to manage rental structures with ease by modulating the activities undertook to manage structures and summarizing the total expense to the total income collected per each structure as it supports multiple buildings. The system will has five modules each dedicated to automating a section of the activities involved in managing the structures. The solution is delivered on multiple platforms including cloud, desktop with SMS notification integration and mobile responsive version. Making it convenient for any poor Telecom "
          }
          alt={"minab BMS"}
        />
        <Project
          projectImage={minabdigital}
          projectTilte={"Minab Digital Data Managment Tool"}
          projectText={
            "Is a digital solution to automate a projects Monitoring, Evaluation, Accountability and Learning (MEAL) and implementation model. The platform is built with standardized operation procedures that are aided with a system to keep logs of operation activities. The tool offers two levels of data collection model, with configurable form parameters and a separate reporting tool to offer insights on the data collecte using the tool. The platform aslo offers a separate configuration deployment that allows the client to configure the user and workflow of the data collection process."
          }
          alt={"minab DDML"}
        />
      </div>
      <button>More Projects</button>
    </div>
  );
};

export default Projects;
