import "./CartDropdown.style.scss";
import { CustomButton } from "../custom-button/CustomButton.component";

export const CartDropdown = () => {
  return (
    <div data-testid="cart-dropdown" className="cart-dropdonw">
      <div className="cart-items" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
