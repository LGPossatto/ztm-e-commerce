import { FC } from "react";
import "./CustomButton.style.scss";

interface props {
  [x: string]: any;
  googleColor?: boolean;
}

export const CustomButton: FC<props> = ({
  children,
  googleColor,
  ...otherProps
}) => {
  return (
    <button
      data-testid="custom-button"
      className={`custom-button ${googleColor ? "google-sign-in" : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
