import Proptypes from "prop-types";
import styles from "./AsideMenu.module.css";

import { Link } from "react-router-dom";

const {
  asideMenuDiv,
  nonMenuSection,
  menuBar,
  menuSection,
  menuSectionHeading,
  menubutton,
  separator,
} = styles;

const AsideMenu = ({ attacks }) => {
  const attackElements = attacks.map((attack) => (
    <Link to={`/${attack}`} key={attack}>
      <div className={menubutton}>{attack}</div>
    </Link>
  ));

  return (
    <div className={asideMenuDiv}>
      <div className={nonMenuSection}>Sage-S</div>
      <div className={menuBar}>
        <div className={menuSection}>
          <div className={menubutton}>Home</div>
          <div className={menubutton}>Analytics</div>
          <div className={menubutton}>Explore</div>
          <div className={menubutton}>Chat</div>
        </div>
        <div className={separator}></div>
        <div className={menuSection}>
          <div className={menuSectionHeading}>Attacks</div>
          {attackElements}
        </div>
      </div>
      <div className={nonMenuSection}>Log Out</div>
    </div>
  );
};

AsideMenu.propTypes = {
  attacks: Proptypes.array.isRequired,
};

export default AsideMenu;
