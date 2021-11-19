import { FC } from "react";
import "./CustomButton.style.scss";

interface props {
  [x: string]: any;
  googleColor?: boolean;
  invertedColor?: boolean;
}

export const CustomButton: FC<props> = ({
  children,
  googleColor,
  invertedColor,
  ...otherProps
}) => {
  return (
    <button
      data-testid="custom-button"
      className={`custom-button ${googleColor ? "google-sign-in" : ""}${
        invertedColor ? "inverted" : ""
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
