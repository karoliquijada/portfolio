import ProfilePicture from "../profile-picture/profile-picture.component";
import Username from "../username/username.component";
import "./header.styles.scss";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-background"></div>
      <div className="header-elements-container">
        <div className="element-container">
          <ProfilePicture />
        </div>
        <div className="element-container">
          <Username name="Karoli" username="@iGirliCode" />
        </div>
        <div className="element-container">
          <p>
            Hey, welcome to my portfolio. I'm a web developer who (kind of) loves Javascript 💛. I love learning new things and working on
            solving challenges.
          </p>
        </div>
        <div className="element-container">
          <p>
            <span>📍Remote Work</span>
            <span>⚡ Frontend Developer </span>
          </p>
          <p>
          <FaGithub /> <FaTwitter /> <FaLinkedinIn />
          </p>        
      
        </div>
      </div>
    </div>
  );
};

export default Header;
