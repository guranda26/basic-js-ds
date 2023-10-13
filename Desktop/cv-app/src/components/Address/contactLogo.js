import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const openPhoneOrSkype = (platform, link) => {
  if (
    platform.toLowerCase() === "skype" ||
    platform.toLowerCase() === "phone"
  ) {
    window.open(link, "_blank"); // Open Skype or phone link in a new tab
  } else if (
    platform.toLowerCase() === "facebook" ||
    platform.toLowerCase() === "twitter"
  ) {
    window.open(link, "_blank"); // Open Facebook or Twitter link in a new tab
  }
};

const ContactItem = ({ platform, link, imageSrc, altText }) => {
  const handleLinkClick = () => {
    const confirmationMessage = `Want to open ${platform}?`;
    const additionalMessage = `${window.location.origin} wants to open your application`;
    const fullMessage = `${confirmationMessage}\n\n${additionalMessage}`;

    const shouldOpen = window.confirm(fullMessage);

    if (shouldOpen) {
      openPhoneOrSkype(platform, link);
    } else {
      console.log("User clicked Cancel");
    }
  };

  return (
    <li className="contact-ul contact-list item" onClick={handleLinkClick}>
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

const ContactInfo = ({ icon, data, type }) => {
  let content;

  if (type === "email") {
    // For email
    content = (
      <Link
        to={`mailto:${data}`}
        className="contact-list_email contact-list_item"
      >
        <FontAwesomeIcon icon={icon} className="contact-icon" /> {data}
      </Link>
    );
  } else if (type === "phone") {
    content = (
      <span className="contact-list_item">
        <FontAwesomeIcon icon={icon} className="contact-icon" /> {data}
      </span>
    );
  } else {
    // Handle other types if necessary
    content = null;
  }

  return <li className="contact-ul contact-list">{content}</li>;
};

export { ContactItem, ContactInfo };
