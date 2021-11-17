import { render } from "@testing-library/react";

import { renderWithRedux } from "../../../assets/helpers/test.helper";

import { AuthPage } from "../AuthPage.component";

jest.mock("firebase/firestore", () => {
  return {
    getFirestore: jest.fn(),
  };
});

const renderAuthPage = () => renderWithRedux(<AuthPage />);

describe("AuthPage", () => {
  test("should render withou crashing", () => {
    renderAuthPage();
  });

  test("should render SignIn component", () => {
    const { getByTestId } = renderAuthPage();
    const signInEl = getByTestId("sign-in");
    expect(signInEl).toBeInTheDocument();
  });

  test("should render SignUp component", () => {
    const { getByTestId } = renderAuthPage();
    const signUpEl = getByTestId("sign-up");
    expect(signUpEl).toBeInTheDocument();
  });
});
