import { render, fireEvent } from "@testing-library/react";
import { SignUp } from "../SignUp.component";

jest.mock("firebase/firestore", () => {
  return {
    getFirestore: jest.fn(),
  };
});

const renderSignUp = () => render(<SignUp />);

describe("SignUp", () => {
  test("should render withou crashing", () => {
    renderSignUp();
  });

  test("should display displayName input", () => {
    const inputEl = renderSignUp().getByLabelText("Display Name");
    expect(inputEl).toBeInTheDocument();
  });

  test("should display email input", () => {
    const inputEl = renderSignUp().getByLabelText("Email");
    expect(inputEl).toBeInTheDocument();
  });

  test("should display password input", () => {
    const inputEl = renderSignUp().getByLabelText("Password");
    expect(inputEl).toBeInTheDocument();
  });

  test("should display confirmPassword input", () => {
    const inputEl = renderSignUp().getByLabelText("Confirm Password");
    expect(inputEl).toBeInTheDocument();
  });

  test("displayName input should display correct value ", () => {
    const inputEl = renderSignUp().getByLabelText(
      "Display Name"
    ) as HTMLInputElement;

    expect(inputEl.value).toBe("");
    fireEvent.change(inputEl, { target: { value: "mock value" } });
    expect(inputEl.value).toBe("mock value");
  });

  test("Email input should display correct value ", () => {
    const inputEl = renderSignUp().getByLabelText("Email") as HTMLInputElement;

    expect(inputEl.value).toBe("");
    fireEvent.change(inputEl, { target: { value: "mock value" } });
    expect(inputEl.value).toBe("mock value");
  });

  test("Password input should display correct value ", () => {
    const inputEl = renderSignUp().getByLabelText(
      "Password"
    ) as HTMLInputElement;

    expect(inputEl.value).toBe("");
    fireEvent.change(inputEl, { target: { value: "mock value" } });
    expect(inputEl.value).toBe("mock value");
  });

  test("Confirm Password input should display correct value ", () => {
    const inputEl = renderSignUp().getByLabelText(
      "Confirm Password"
    ) as HTMLInputElement;

    expect(inputEl.value).toBe("");
    fireEvent.change(inputEl, { target: { value: "mock value" } });
    expect(inputEl.value).toBe("mock value");
  });

  test("should display submit button", () => {
    const buttonEl = renderSignUp().getByTestId("custom-button");
    expect(buttonEl.textContent).toBe("SIGN UP");
  });
});
