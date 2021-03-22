import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

import "./navbar.scss";
import { useCounterContext } from "../../context/counterContext";

export const Navbar = () => {
  const F = FormattedMessage;
  // const [active, setActive] = useState(false);
  const {
    incrementAbout,
    incrementSkills,
    incrementEducation,
    incrementExperience,
    incrementProjects,
    activeAbout,
    activeSkills,
    activeEducation,
    activeExperience,
    activeProjects,
    setActiveAbout,
    setActiveSkills,
    setActiveEducation,
    setActiveExperience,
    setActiveProjects,
  } = useCounterContext();

  return (
    <nav className="tabs-container">
      <ul className="tabs">
        <li>
          <Link className="tab" to="/">
            main
          </Link>
        </li>
        <li>
          <Link
            className="tab"
            to="/about"
            onClick={
              !activeAbout
                ? () => incrementAbout()
                : setActiveAbout(true) && setActiveAbout(true)
            }
          >
            <F id="about" />
          </Link>{" "}
        </li>
        <li>
          <Link
            className="tab"
            to="/skills"
            onClick={
              !activeSkills ? () => incrementSkills() : setActiveSkills(true)
            }
          >
            <F id="skills" />
          </Link>
        </li>
        <li>
          <Link
            className="tab"
            to="/projects"
            onClick={
              !activeEducation
                ? () => incrementEducation()
                : setActiveEducation(true)
            }
          >
            <F id="projects" />
          </Link>
        </li>
        <li>
          <Link
            className="tab"
            to="/education"
            onClick={
              !activeExperience
                ? () => incrementExperience()
                : setActiveExperience(true)
            }
          >
            <F id="education" />
          </Link>
        </li>
        <li>
          <Link
            className="tab"
            to="/experience"
            onClick={
              !activeProjects
                ? () => incrementProjects()
                : setActiveProjects(true)
            }
          >
            <F id="experience" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
