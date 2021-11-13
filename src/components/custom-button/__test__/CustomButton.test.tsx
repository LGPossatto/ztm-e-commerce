import { render } from "@testing-library/react";
import { CustomButton } from "../CustomButton.component";

const renderCustomButton = () => render(<CustomButton />);

describe("CustomButton", () => {
  test("should render withou crashing", () => {
    renderCustomButton();
  });
});
