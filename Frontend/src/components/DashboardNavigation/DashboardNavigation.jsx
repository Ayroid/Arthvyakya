import styles from "./DashboardNavigation.module.css";

const {
  dashboardNavigationDiv,
  userGreetings,
  navigation,
  navigationButtons,
  navButton,
  navIcons,
  separator,
} = styles;

const DashboardNavigation = () => {
  return (
    <div className={dashboardNavigationDiv}>
      <div className={userGreetings}>
        <h1>Hello Ayroid!</h1>
        <p>Let&apos;s get the systems secure</p>
      </div>
      <div className={navigation}>
        <div className={navigationButtons}>
          <img src="/icons/search.png" className={navIcons} alt="search" />
          <img
            src="/icons/notification.png"
            className={navIcons}
            alt="search"
          />
        </div>
        <hr className={separator} />
        <div className={navigationButtons}>
          <img src="/icons/account.png" className={navIcons} alt="account" />
          <div className={navButton}>Username</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavigation;
