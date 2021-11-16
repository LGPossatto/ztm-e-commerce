import { render, fireEvent } from "@testing-library/react";
import { SignIn } from "../SignIn.component";

jest.mock("firebase/firestore", () => {
  return {
    getFirestore: jest.fn(),
  };
});

const renderSignIn = () => render(<SignIn />);

describe("SignIn", () => {
  test("should render withou crashing", () => {
    renderSignIn();
  });

  test("should display email input", () => {
    const inputEl = renderSignIn().getByLabelText("email");
    expect(inputEl).toBeInTheDocument();
  });

  test("should display password input", () => {
    const inputEl = renderSignIn().getByLabelText("password");
    expect(inputEl).toBeInTheDocument();
  });

  test("email input should display correct value", () => {
    const inputEl = renderSignIn().getByLabelText("email") as HTMLInputElement;

    expect(inputEl.value).toBe("");
    fireEvent.change(inputEl, { target: { value: "changed value" } });

    expect(inputEl.value).toBe("changed value");
  });

  test("password input should display correct value", () => {
    const inputEl = renderSignIn().getByLabelText(
      "password"
    ) as HTMLInputElement;

    expect(inputEl.value).toBe("");
    fireEvent.change(inputEl, { target: { value: "changed value" } });

    expect(inputEl.value).toBe("changed value");
  });

  test("should display submit and sign in with google buttons", () => {
    const buttonEl = renderSignIn().getAllByTestId("custom-button");
    expect(buttonEl[0].textContent).toBe("Sign in");
    expect(buttonEl[1].textContent).toBe("Login With Google");
  });
});
