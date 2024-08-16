import React from "react";
import "./Services.css";
import Service from "./Service";
/* service icons */
import serviceIcon1 from "../../assets/service_icon1.png";
import serviceIcon2 from "../../assets/service_icon2.png";
import serviceIcon3 from "../../assets/service_icon3.png";
const Services = () => {
  return (
    <div className="services" id="services">
      <h1>Services</h1>
      <div className="service">
        <Service
          serviceIcon={serviceIcon1}
          serviceTilte={"Technology Consultancy"}
          serviceText={
            "Minab offers technical consultancy services to both local and international organizations in three primary areas, data collection and analysis, process automation, and standard operation procedure designs."
          }
        />
        <Service
          serviceIcon={serviceIcon2}
          serviceTilte={"Software Development"}
          serviceText={
            "Minab is a reputable firm in delivering various types of software development services based on both liners as well as dynamic specifications from our clients following all the industry standards and procedures."
          }
        />
        <Service
          serviceIcon={serviceIcon3}
          serviceTilte={"Outsourcing"}
          serviceText={
            "Minab offers developer hours, offshore dedicated developer capacity, and organization IT department outsourcing services to all corporations through our well-experienced team in the sector of operation."
          }
        />
      </div>
    </div>
  );
};

export default Services;
