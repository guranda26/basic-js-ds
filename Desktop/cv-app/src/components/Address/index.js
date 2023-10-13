import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ContactItem, ContactInfo } from "./contactLogo";
import twitterImg from "../../assets/images/icons/twitter-icon.png";
import facebookImg from "../../assets/images/icons/facebook-icon.png";
import skypeImg from "../../assets/images/icons/skype-icon.png";

export function Address() {
  return (
    <section id="contact">
      <h2>Contacts</h2>
      <ul className="contact-ul">
        <ContactInfo
          icon={faPhone}
          text="592 50
            53 36"
        />
        <ContactInfo icon={faEnvelope} text="guralemo@gmail.com" />
        <ContactItem
          platform="Twitter"
          link="https://twitter.com/twitter"
          imageSrc={twitterImg}
          altText="Twitter Logo"
        />
        <ContactItem
          platform="Facebook"
          link="https://www.facebook.com/facebook"
          imageSrc={facebookImg}
          altText="Facebook Logo"
        />
        <ContactItem
          platform="Skype"
          link="skype:your-skype-id?chat"
          imageSrc={skypeImg}
          altText="Skype Logo"
        />
      </ul>
    </section>
  );
}
