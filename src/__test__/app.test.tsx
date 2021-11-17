import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { App } from "../App";
import { renderWithRedux } from "../assets/helpers/test.helper";

jest.mock("firebase/firestore", () => {
  return {
    getFirestore: jest.fn(),
  };
});

const renderApp = (path: string = "/", currentUser: boolean = false) => {
  window.history.pushState({}, "test", path);

  return renderWithRedux(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    currentUser
  );
};

describe("App", () => {
  test("should render Header", () => {
    renderApp();

    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });

  test("should render HomePage", () => {
    renderApp();

    const homePage = screen.getByTestId("home-page");
    expect(homePage).toBeInTheDocument();
  });

  test("should render AuthPage", () => {
    renderApp("/auth");

    const authPage = screen.getByTestId("auth-page");
    expect(authPage).toBeInTheDocument();
  });

  test("should redirect to home if trying to access auth page while logged in", async () => {
    renderApp("/auth", true);

    const authPage = await screen.findByTestId("home-page");
    expect(authPage).toBeInTheDocument();
  });

  test("should render ShopPage", () => {
    renderApp("/shop");

    const shopPage = screen.getByTestId("shop-page");
    expect(shopPage).toBeInTheDocument();
  });
});
