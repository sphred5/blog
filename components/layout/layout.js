import MainNavigation from "./main-navigation.js";
import classes from "./logo.module.css";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
