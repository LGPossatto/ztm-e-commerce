import { useState } from "react";

import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import "./SignUp.style.scss";
import { FormInput } from "../form-input/FormInput.component";
import { CustomButton } from "../custom-button/CustomButton.component";

export const SignUp = () => {
  const [input, setInput] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = input;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (user.email === email) {
        await createUserProfileDocument({ uid: user.uid, displayName, email });

        setInput({
          displayName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        throw new Error("Error creating new user");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (target: EventTarget & HTMLInputElement) => {
    setInput({ ...input, [target.name]: target.value });
  };

  return (
    <div data-testid="sign-up" className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={input.displayName}
          handleChange={(e) => handleChange(e.target)}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={input.email}
          handleChange={(e) => handleChange(e.target)}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={input.password}
          handleChange={(e) => handleChange(e.target)}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={input.confirmPassword}
          handleChange={(e) => handleChange(e.target)}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};
