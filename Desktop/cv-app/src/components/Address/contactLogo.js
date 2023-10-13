import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactItem = ({ platform, link, imageSrc, altText }) => {
  return (
    <li className="contact-ul contact-list item">
      <div className="contact-list_item item">
        <span className="contact-list_item">
          <img src={imageSrc} alt={altText} className="contact-icon" />
        </span>
      </div>
      <div className="contact-list_item item">
        <p className="contact-list_item">{platform}</p>
        <span className="contact-list_item">{link}</span>
      </div>
    </li>
  );
};

const ContactInfo = ({ icon, text }) => {
  return (
    <li className="contact-ul contact-list">
      <span className="contact-list_item">
        <FontAwesomeIcon icon={icon} className="contact-icon" /> {text}
      </span>
    </li>
  );
};

export { ContactItem, ContactInfo };
