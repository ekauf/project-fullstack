import "./Nav.scss";
import { Link } from "react-router-dom";
import locationIcon from "../../assets/images/icon-location.png";

const Nav = () => {
  return (
    <div className="nav">
      <img className="nav__icon" src={locationIcon} alt="location icon" />
      <Link className="nav__item" to="/locations">
        Places
      </Link>
      <Link className="nav__item" to="/location/new">
        New
      </Link>
    </div>
  );
};

export default Nav;
