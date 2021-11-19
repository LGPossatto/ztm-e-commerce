import { render } from "@testing-library/react";
import { CustomButton } from "../CustomButton.component";

const renderCustomButton = (googleColor = false, inverted = false) =>
  render(<CustomButton googleColor={googleColor} invertedColor={inverted} />);

describe("CustomButton", () => {
  test("should render withou crashing", () => {
    renderCustomButton();
  });

  test("should render with google color", () => {
    const {
      container: { firstChild },
    } = renderCustomButton(true);
    // @ts-ignore
    expect(firstChild.className.split(" ")[1]).toBe("google-sign-in");
  });

  test("should render with inverted color", () => {
    const {
      container: { firstChild },
    } = renderCustomButton(false, true);
    // @ts-ignore
    expect(firstChild.className.split(" ")[1]).toBe("inverted");
  });
});
