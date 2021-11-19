import { render } from "@testing-library/react";

import { CartIcon } from "../CartIcon.component";

const renderCartIcon = () => render(<CartIcon></CartIcon>);

describe("CartIcon", () => {
  test("should render correct items number", () => {
    const el = renderCartIcon().getByText("0");
    expect(el).toBeInTheDocument();
  });

  test("should cart icon", () => {
    const icon = renderCartIcon().getByTestId("svg-cart-icon");
    expect(icon).toBeInTheDocument();
  });
});
