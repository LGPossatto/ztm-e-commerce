import { FC } from "react";
import "./CustomButton.style.scss";

interface props {
  [x: string]: any;
}

export const CustomButton: FC<props> = ({ children, ...otherProps }) => {
  return (
    <button
      data-testid="custom-button"
      className="custom-button"
      {...otherProps}
    >
      {children}
    </button>
  );
};
