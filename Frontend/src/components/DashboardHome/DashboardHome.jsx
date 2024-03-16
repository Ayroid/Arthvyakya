import Proptypes from "prop-types";
import styles from "./DashboardHome.module.css";

import { Link } from "react-router-dom";

const { dashboardHomeDiv, dashboardHome, dashboardBox } = styles;

const DashboardHome = ({ attacks }) => {
  const attackElements = attacks.map((attack) => (
    <Link to={`/${attack}`} key={attack}>
      <div className={dashboardBox}>{attack}</div>
    </Link>
  ));

  return (
    <div className={dashboardHomeDiv}>
      <div className={dashboardHome}>{attackElements}</div>
    </div>
  );
};

DashboardHome.propTypes = {
  attacks: Proptypes.array.isRequired,
};

export default DashboardHome;
