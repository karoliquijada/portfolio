import ProfilePicture from "../profile-picture/profile-picture.component";
import Button from "../button/button.component";
import Username from "../username/username.component";
import "./header.styles.scss";
import { FiMapPin } from 'react-icons/fi';

const Header = () => {
  return (
    <div className="header-container">
      {/* Background del header */}
      <div className="header-background"></div>
      <div className="header-elements-container">
        <div className="element-container">
          <ProfilePicture />
          <Button children="Contacto" buttonType="inverted" />
        </div>
        <div className="element-container">
          <Username name="Karoli" username="@iGirliCode" />
        </div>
        <div className="element-container">
          <div className="bio">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas officiis quis, ipsa quo cupiditate provident aliquam minima
              eaque tempore nesciunt inventore magnam, illum possimus culpa. Repudiandae quisquam atque veritatis possimus.
            </p>
          </div>
        </div>
        <div className="element-container">
          <div className="bio">
            <span><FiMapPin/>En algún lugar de latam</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
