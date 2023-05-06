import { Outlet } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <div className="navigation-container">
      <p>Navbar</p>
      <Outlet />
    </div>
  );
};

export default Navigation;
