import React from "react";
import "./team.css";
import Button from "../Button/Button";
import Card from "./Card";
/* team images */
import kaleab from "../../assets/kaleab.png";
import mike from "../../assets/mike.png";
import mussie from "../../assets/mussie.png";
import natnael from "../../assets/natnael.png";
import dereje from "../../assets/dereje.png";
import bereket from "../../assets/bereket.png";
/* icons */
import twitterIcon from "../../assets/twitter.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import browseIcon from "../../assets/browse.svg";
const Team = () => {
  return (
    <div className="team">
      <div className="team-left">
        <h1>Meet the Team</h1>
        <p>
          Introducing one of the best software development and technical
          operation team in the Ethiopian technology service market. Our team
          constitutes a diverse set of talent and expertise to tackle our
          client's challenges and solution needs.
        </p>
      </div>
      <div className="team-right">
        <Card
          cardImage={kaleab}
          cardName={"Kaleab Mezgebu"}
          cardCareer={"Co-Founder and CEO"}
          twitterIcon={twitterIcon}
          linkedinIcon={linkedinIcon}
          browseIcon={browseIcon}
          alt={"Kaleab"}
        />
        <Card
          cardImage={mike}
          cardName={"Mickael Sahlu"}
          cardCareer={"Co-Founder and CEO"}
          twitterIcon={twitterIcon}
          linkedinIcon={linkedinIcon}
          browseIcon={browseIcon}
          alt={"Kaleab"}
        />
        <Card
          cardImage={bereket}
          cardName={"Bereket Abebe"}
          cardCareer={"Co-Founder and former CTO"}
          twitterIcon={twitterIcon}
          linkedinIcon={linkedinIcon}
          browseIcon={browseIcon}
          alt={"Kaleab"}
        />
        <Card
          cardImage={natnael}
          cardName={"Natnael Yared"}
          cardCareer={"Communication and marketing manager"}
          twitterIcon={twitterIcon}
          linkedinIcon={linkedinIcon}
          browseIcon={browseIcon}
          alt={"Kaleab"}
        />
        <Card
          cardImage={dereje}
          cardName={"Dereje Abishu"}
          cardCareer={"CFO"}
          twitterIcon={twitterIcon}
          linkedinIcon={linkedinIcon}
          browseIcon={browseIcon}
          alt={"Kaleab"}
        />
        <Card
          cardImage={mussie}
          cardName={"Mussie Teshome"}
          cardCareer={"Full Stack dev"}
          twitterIcon={twitterIcon}
          linkedinIcon={linkedinIcon}
          browseIcon={browseIcon}
          alt={"Kaleab"}
        />
      </div>
    </div>
  );
};

export default Team;
