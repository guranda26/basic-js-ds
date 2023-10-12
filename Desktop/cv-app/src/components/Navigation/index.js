import { Link, useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGraduationCap,
  faPen,
  faSuitcase,
  faLocationArrow,
  faComment,
  faGem,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <ul>
        <li onClick={() => scrollToElement("about")}>
          <span className="icon">
            <FontAwesomeIcon icon={faUser} />
          </span>
          About me
        </li>
        <li onClick={() => scrollToElement("education")}>
          <span className="icon">
            <FontAwesomeIcon icon={faGraduationCap} />
          </span>
          Education
        </li>
        <li onClick={() => scrollToElement("experience")}>
          <span className="icon">
            <FontAwesomeIcon icon={faPen} />
          </span>
          Experience
        </li>
        <li onClick={() => scrollToElement("skills")}>
          <span className="icon">
            <FontAwesomeIcon icon={faGem} />
          </span>
          Skills
        </li>
        <li onClick={() => scrollToElement("portfolio")}>
          <span className="icon">
            <FontAwesomeIcon icon={faSuitcase} />
          </span>
          Portfolio
        </li>
        <li onClick={() => scrollToElement("contact")}>
          <span className="icon">
            <FontAwesomeIcon icon={faLocationArrow} />
          </span>
          Contact
        </li>
        <li onClick={() => scrollToElement("feedback")}>
          <span className="icon">
            <FontAwesomeIcon icon={faComment} />
          </span>
          Feedback
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
