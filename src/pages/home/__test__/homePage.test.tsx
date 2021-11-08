import { render, screen } from "@testing-library/react";
import { HomePage } from "../HomePage.component";

describe("HomePage", () => {
  beforeAll(() => {
    render(<HomePage />);
  });

  test("should contain Directory", () => {
    const derectory = screen.getByTestId("directory");
    expect(derectory).toBeInTheDocument();
  });
});
