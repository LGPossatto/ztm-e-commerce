import "./AuthPage.style.scss";
import { SignIn } from "../../components/sign-in/SignIn.component";
import { SignUp } from "../../components/sign-up/SignUp.component";

export const AuthPage = () => {
  return (
    <div data-testid="auth-page" className="auth-page">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
};
