import { useState } from "react";

import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import { CustomButton } from "../custom-button/CustomButton.component";
import { FormInput } from "../form-input/FormInput.component";

import "./SignIn.style.scss";

export const SignIn = () => {
  const [input, setInput] = useState({ email: "", password: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = input;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setInput({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (target: EventTarget & HTMLInputElement) => {
    setInput({ ...input, [target.name]: target.value });
  };

  return (
    <div data-testid="sign-in" className="sign-in">
      <h2 className="title">I already have an account</h2>
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
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} googleColor>
            Login With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
