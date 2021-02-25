
import './footer.scss'
import git from '../../img/git.jpg'
import linkedin from '../../img/link.jpg'

export const Footer = () => {

    return (
        <footer>
        <div className="footer-social">
          <a href="https://github.com/Oleh8888"> <img src={git} alt="gitHub" width="25" height="25"/>GitHub</a> 
          <a href="https://www.linkedin.com/in/oleh-prymachenko-3b69421ba/"> <img src={linkedin} alt="LinkidIn" width="20" height="20" />LinkedIn</a>
        </div>
        <div className="footer-private">
          <span> &#9742; +380964595884</span>
          <a href="mailto:primaoleg1998@gmail.com"> &#9993; primaoleg1998@gmail.com </a>
        </div>
      </footer>
    );
}