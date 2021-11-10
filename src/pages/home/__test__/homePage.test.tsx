import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import { HomePage } from "../HomePage.component";

describe("HomePage", () => {
  beforeAll(() => {
    render(<HomePage />, { wrapper: MemoryRouter });
  });

  test("should contain Directory", () => {
    const derectory = screen.getByTestId("directory");
    expect(derectory).toBeInTheDocument();
  });
});
