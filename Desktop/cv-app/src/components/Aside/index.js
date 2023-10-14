import React from "react";
import PhotoBox from "../PhotoBox";
import Nav from "../Navigation";

const Aside = () => {
  return (
    <aside className="aside">
      <PhotoBox name="John Doe" avatar="..assets/images" />
      <Nav></Nav>
    </aside>
  );
};

export default Aside;
