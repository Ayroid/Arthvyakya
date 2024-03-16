import Proptypes from "prop-types";

import AsideMenu from "../../components/AsideMenu/AsideMenu";
import DashboardHome from "../../components/DashboardHome/DashboardHome";
import DashboardNavigation from "../../components/DashboardNavigation/DashboardNavigation";

import { dashboardDiv, dashboardWrapper } from "./DashBoard.module.css";

const DashBoard = ({ attacks }) => {
  return (
    <div className={dashboardDiv}>
      <AsideMenu attacks={attacks} />
      <div className={dashboardWrapper}>
        <DashboardNavigation />
        <DashboardHome attacks={attacks} />
      </div>
    </div>
  );
};

DashBoard.propTypes = {
  attacks: Proptypes.array.isRequired,
};

export default DashBoard;
