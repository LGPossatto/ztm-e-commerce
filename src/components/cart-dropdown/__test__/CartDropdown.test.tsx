import { render } from "@testing-library/react";

import { CartDropdown } from "../CartDropdown.component";

const renderCartDropdown = () => render(<CartDropdown></CartDropdown>);

describe("CartDropdown", () => {
  test("should render checkout button", () => {
    const button = renderCartDropdown().getByTestId(
      "custom-button"
    ) as HTMLButtonElement;
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe("GO TO CHECKOUT");
  });
});
