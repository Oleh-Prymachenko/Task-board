import "./footer.scss";
import github from "../../img/github.jpg";
import linkedin from "../../img/link.jpg";

export const Footer = () => {
  return (
    <footer>
      <div className="contact">
        <a href="https://github.com/Oleh8888">
          <img src={github} alt="gitHub" className="git" />
        </a>
      </div>
      <div className="contact">
        <a href="https://www.linkedin.com/in/oleh-prymachenko-3b69421ba/">
          <img src={linkedin} alt="LinkidIn" className="linkidin" />
        </a>
      </div>
      <div className="contact">
        <a href="mailto:primaoleg1998@gmail.com" className="email">
          &#9993; primaoleg1998@gmail.com
        </a>
      </div>
    </footer>
  );
};
