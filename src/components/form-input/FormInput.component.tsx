import { ChangeEventHandler } from "react";
import "./FormInput.style.scss";

interface props {
  type: string;
  name: string;
  label?: string;
  value: string;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}

export const FormInput = ({
  type,
  name,
  label,
  value,
  handleChange,
  required,
}: props) => {
  return (
    <div className="group">
      <input
        data-testid="form-input"
        className="form-input"
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        required={required}
      ></input>
      {label ? (
        <label
          data-testid="label"
          htmlFor={name}
          className={`${value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
