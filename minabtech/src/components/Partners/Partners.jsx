import React from "react";
import "./Partners.css";
/* partner images */
import abc from "../../assets/partners/abc.png";
import BMZ from "../../assets/partners/BMZ.png";
import consult from "../../assets/partners/consult.png";
import DAI from "../../assets/partners/DAI.png";
import DFID from "../../assets/partners/DFID.png";
import EIC from "../../assets/partners/EIC.png";
import giz from "../../assets/partners/giz.png";
import HPR from "../../assets/partners/HPR.png";
import icas from "../../assets/partners/icas.png";
import mastercard from "../../assets/partners/mastercard.png";
import mc_logo from "../../assets/partners/mc-logo.png";
import MLS from "../../assets/partners/MLS.png";
import oxford from "../../assets/partners/oxford.png";
import savechild from "../../assets/partners/savechild.png";
import sida from "../../assets/partners/sida.png";
import snv from "../../assets/partners/snv.png";
import UKAID from "../../assets/partners/UKAID.png";
import USAID from "../../assets/partners/USAID.png";
import world_bank from "../../assets/partners/world_bank.png";
const Partners = () => {
  return (
    <div className="partners">
      <h1>Parntners and Clients</h1>
      <ul>
        <div>
          <li>
            <img src={MLS} alt="" />
          </li>
          <li>
            <img src={giz} alt="" />
          </li>
          <li>
            <img src={mc_logo} alt="" />
          </li>
          <li>
            <img src={icas} alt="" />
          </li>
          <li>
            <img src={world_bank} alt="" />
          </li>
          <li>
            <img src={abc} alt="" />
          </li>
        </div>
        <div>
          <li>
            <img src={UKAID} alt="" />
          </li>
          <li>
            <img src={oxford} alt="" />
          </li>
          <li>
            <img src={EIC} alt="" />
          </li>
          <li>
            <img src={savechild} alt="" />
          </li>
          <li>
            <img src={DAI} alt="" />
          </li>
          <li>
            <img src={mastercard} alt="" />
          </li>
        </div>
        <div>
          <li>
            <img src={snv} alt="" />
          </li>
          <li>
            <img src={consult} alt="" />
          </li>
          <li>
            <img src={USAID} alt="" />
          </li>
          <li>
            <img src={DFID} alt="" />
          </li>
          <li>
            <img src={BMZ} alt="" />
          </li>
          <li>
            <img src={HPR} alt="" />
          </li>
          <li>
            <img src={sida} alt="" />
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Partners;
