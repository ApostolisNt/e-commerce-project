import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import "./navigation.style.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import crown from "../../assets/crown.svg";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
        {currentUser ? (
          <span className="nav-links-container" onClick={signOutUser}>
            Sign Out
          </span>
        ) : (
          <Link className="nav-links-container" to="/auth">
            <div>Sign In</div>
          </Link>
        )}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
