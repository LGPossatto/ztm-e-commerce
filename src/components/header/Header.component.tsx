import { Link } from "react-router-dom";

import "./Header.style.scss";
import { ReactComponent as Logo } from "../../assets/icons/crown.svg";

export const Header = () => {
  return (
    <div data-testid="header" className="header">
      <Link className="logo-container" to="/">
        <Logo data-testid="logo" className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};
