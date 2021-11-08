import { render, screen } from "@testing-library/react";

import { App } from "../App";

describe("App", () => {
  beforeAll(() => {
    render(<App />);
  });

  test("should contain HomePage", () => {
    const homePage = screen.getByTestId("home-page");
    expect(homePage).toBeInTheDocument();
  });
});
