import React from "react";
import PhotoBox from "../PhotoBox";
import Nav from "../Navigation";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Aside = () => {
  return (
    <aside className="aside">
      <PhotoBox name="John Doe" avatar="..assets/images" />
      <Nav></Nav>
      <Button icon={<FontAwesomeIcon icon={faChevronLeft} />} text="Go back" />
      {/* <Button text="Know More" /> */}
    </aside>
  );
};

export default Aside;
