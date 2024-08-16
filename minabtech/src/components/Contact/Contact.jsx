import React from "react";
import "./Contact.css";
/* contact images */
import call from "../../assets/contact/call.png";
import email from "../../assets/contact/email.png";
import location from "../../assets/contact/location.png";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-left">
        <h1>Get</h1>
        <h1>in touch.</h1>
        <ul>
          <li>
            <span>
              <img src={call} alt="call us" />
            </span>
            <span>+251118221001</span>
          </li>
          <li>
            <span>
              <img src={call} alt="call us" />
            </span>
            <span>++251118221002</span>
          </li>
          <li>
            <span>
              <img src={email} alt="call us" />
            </span>
            <span>info@minabtech.com</span>
          </li>
          <li>
            <span>
              <img src={location} alt="call us" />
            </span>
            <span>
              Addis Ababa, Ethiopia Bole, Behind DH-geda Tower, Afomi Building
              3rd floor, Addis Ababa
            </span>
          </li>
        </ul>
        <div>
          <h1>map goes here</h1>
        </div>
      </div>
      <div className="contact-right">
        <form>
          <h1>Contact us</h1>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" />
            <label htmlFor="phone">Phone number</label>
            <input type="tel" />
            <label htmlFor="email">Email</label>
            <input type="email" />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message"></textarea>
            <input type="submit" value="submit" />
            <input type="reset" value="reset" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
