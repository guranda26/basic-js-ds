import React from "react";
import { Aboutme } from "../Box/index";
import { Education } from "../Timeline/index";
import Nav from "../Navigation";
import { Experience } from "../Expertise/index";
import { Portfolio } from "../Portfolio";
import { Contact } from "../Address";
import { Feedback } from "../Feedback";
const Layout = () => {
  return (
    <div>
      <Aboutme />
      <Education />
      <Experience />
      <Portfolio />
      <Contact />
      <Feedback />
    </div>
  );
};

export default Layout;
