import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";
import {
  faUser,
  faGraduationCap,
  faPen,
  faSuitcase,
  faLocationArrow,
  faComment,
  faGem,
} from "@fortawesome/free-solid-svg-icons";

// const Nav = () => {
//   const scrollToElement = (elementId) => {
//     smoothScrollToElement(elementId);
//   };

//   return (
//     <nav>
//       <ul>
//         <li onClick={() => scrollToElement("about")}>
//           <HashLink to={"/#about"}>
//             <span className="icon">
//               <FontAwesomeIcon icon={faUser} />
//             </span>
//             About me
//           </HashLink>
//         </li>
//         <li onClick={() => scrollToElement("education")}>
//           <HashLink to={"/#education"}>
//             <span className="icon">
//               <FontAwesomeIcon icon={faGraduationCap} />
//             </span>
//             Education
//           </HashLink>
//         </li>
//         <li onClick={() => scrollToElement("experience")}>
//           <HashLink to={"/#experience"}>
//             <span className="icon">
//               <FontAwesomeIcon icon={faPen} />
//             </span>
//             Experience
//           </HashLink>
//         </li>
//         <li onClick={() => scrollToElement("skills")}>
//           <HashLink smooth to={"/#skills"}>
//             <span className="icon">
//               <FontAwesomeIcon icon={faGem} />
//             </span>
//             Skills
//           </HashLink>
//         </li>
//         <li onClick={() => scrollToElement("portfolio")}>
//           <HashLink smooth to={"/#portfolio"}>
//             <span className="icon">
//               <FontAwesomeIcon icon={faSuitcase} />
//             </span>
//             Portfolio
//           </HashLink>
//         </li>
//         <li onClick={() => scrollToElement("contact")}>
//           <HashLink smooth to="/#contact">
//             <span className="icon">
//               <FontAwesomeIcon icon={faLocationArrow} />
//             </span>
//             Contact
//           </HashLink>
//         </li>
//         <li onClick={() => scrollToElement("feedback")}>
//           <HashLink smooth to="/#feedback">
//             <span className="icon">
//               <FontAwesomeIcon icon={faComment} />
//             </span>
//             Feedback
//           </HashLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

const sections = [
  {
    id: "about",
    label: "About me",
    icon: faUser,
  },
  {
    id: "education",
    label: "Education",
    icon: faGraduationCap,
  },
  {
    id: "experience",
    label: "Experience",
    icon: faPen,
  },
  {
    id: "skills",
    label: "Skills",
    icon: faGem,
  },
  {
    id: "portfolio",
    label: "Portfolio",
    icon: faSuitcase,
  },
  {
    id: "contact",
    label: "Contact",
    icon: faLocationArrow,
  },
  {
    id: "feedback",
    label: "Feedback",
    icon: faComment,
  },
];
const Nav = () => {
  const [activeLink, setActiveLink] = useState(null);

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleLinkClick = (sectionId) => {
    setActiveLink(sectionId);
    scrollToElement(sectionId);
  };

  return (
    <nav className="nav-bar">
      <ul className="nav-ul">
        {sections &&
          sections.map((section) => (
            <li key={section.id} onClick={() => handleLinkClick(section.id)}>
              <NavLink
                smooth
                to={`/#${section.id}`}
                style={{
                  textDecoration: "none",
                  color: activeLink === section.id ? "#26c17e" : "",
                  transition: "color 0.3s ease",
                }}
                className="nav-link"
              >
                <span className="icon">
                  <FontAwesomeIcon icon={section.icon} />
                </span>
                {section.label}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Nav;
