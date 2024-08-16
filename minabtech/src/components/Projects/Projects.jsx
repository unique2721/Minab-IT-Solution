import React from "react";
import "./Projects.css";
import Project from "./Project";
/* project images */
import hahu from "../../assets/hahujob.webp";
import minabdigital from "../../assets/minabdigital.webp";
import minabdmbs from "../../assets/minabdmbs.webp";
const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <p>
        Below are some of our notable products and projects. We have
        successfully developed and delivered multiple projects. Among other
        below are some of our large-scale engagement and products currently
        actively serving our clients as well as users.
      </p>
      <div>
        <Project
          projectImage={hahu}
          projectTilte={"Hahu Jobs"}
          projectText={
            "HaHuJobs a cloud services operating to capture structured data of the Ethiopian skilled and non-skilled labor market through digitally connecting thousands of job seekers in major Ethiopian cities as well as industrial parks. The platform in a collection of micro services groped to compose web application modules that offer a set of functionalities. HaHuJobs is an electronic product sold as service to a category of clients as per their specific needs in the labor market of Ethiopia. It features various service categories which revolves around data driven job matching of the right candidate with the right job opening, student tracing, capacity building and assessing of Jobseekers. This platform has sub services tailored to the specific industries and stakeholders, but as a primary concept HaHuJobs has a strong biometric based jobseeker identification and an automated method of matching workers with appropriate vacancy through structured data formats."
          }
          alt={"hahu jobs"}
        />
        <span>m</span>
      </div>
    </div>
  );
};

export default Projects;
