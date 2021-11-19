import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { IRootState } from "../../redux/rootReducer";

import "./Header.style.scss";
import { ReactComponent as Logo } from "../../assets/icons/crown.svg";
import { CartIcon } from "../cart-icon/CartIcon.component";
import { CartDropdown } from "../cart-dropdown/CartDropdown.component";

interface props {
  onLogout: Function;
}

export const Header = ({ onLogout }: props) => {
  const user = useSelector((state: IRootState) => state.user.currentUser);
  const hidden = useSelector((state: IRootState) => state.cart.hidden);

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
        <CartIcon></CartIcon>
      </div>
      {hidden ? null : <CartDropdown></CartDropdown>}
    </div>
  );
};
