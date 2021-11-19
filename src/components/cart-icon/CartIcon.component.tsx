import "./CartIcon.style.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/icons/shopping-bag.svg";

export const CartIcon = () => {
  return (
    <div data-testid="cart-icon" className="cart-icon">
      <ShoppingIcon data-testid="svg-cart-icon" className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
