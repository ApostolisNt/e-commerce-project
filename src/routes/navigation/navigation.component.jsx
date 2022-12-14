import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.style.scss";
import crown from "../../assets/crown.svg";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={crown} />
        </Link>
        <Link className="nav-links-container" to="/Shop">
          <div>Shop</div>
        </Link>
        <Link className="nav-links-container" to="/Contact">
          <div>Contact</div>
        </Link>
        <Link className="nav-links-container" to="/auth">
          <div>Auth</div>
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
