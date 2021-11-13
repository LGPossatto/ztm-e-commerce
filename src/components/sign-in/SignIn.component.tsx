import { useState } from "react";
import { CustomButton } from "../custom-button/CustomButton.component";
import { FormInput } from "../form-input/FormInput.component";

import "./SignIn.style.scss";

export const SignIn = () => {
  const [input, setInput] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (target: EventTarget & HTMLInputElement) => {
    setInput({ ...input, [target.name]: target.value });
  };

  return (
    <div data-testid="sign-in" className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={(e) => handleChange(e.target)}
          value={input.email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={input.password}
          handleChange={(e) => handleChange(e.target)}
          label="password"
          required
        />
        <CustomButton type="submit"> Sign in </CustomButton>
      </form>
    </div>
  );
};
