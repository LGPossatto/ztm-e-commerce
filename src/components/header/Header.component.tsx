import { Link } from "react-router-dom";

import { IUserAuth } from "../../firebase/firebase.utils";

import "./Header.style.scss";
import { ReactComponent as Logo } from "../../assets/icons/crown.svg";

interface props {
  user: IUserAuth | null;
  onLogout: Function;
}

export const Header = ({ user, onLogout }: props) => {
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
        {user ? (
          <div className="option" onClick={() => onLogout()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/auth">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};
