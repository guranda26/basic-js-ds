import React from "react";
import PhotoBox from "../PhotoBox"; // Make sure to adjust the import path based on your project structure
import Nav from "../Navigation";
// import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');

const Aside = () => {
  return (
    <aside className="aside">
      <PhotoBox name="John Doe" avatar="..assets/images" />
      <Nav></Nav>
    </aside>
  );
};

export default Aside;
