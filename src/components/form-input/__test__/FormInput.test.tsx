import { render, fireEvent } from "@testing-library/react";
import { FormInput } from "../FormInput.component";

const mockHandleChange = jest.fn();
const renderFormInput = () =>
  render(
    <FormInput
      name="mockName"
      type="mockType"
      handleChange={mockHandleChange}
      value={"mockValue"}
      label="mockLabel"
      required
    />
  );

describe("FormInput", () => {
  test("should render withou crashing", () => {
    renderFormInput();
  });

  test("should have correct input value", () => {
    const inputEl = renderFormInput().getByTestId("form-input");

    expect(inputEl).toHaveValue("mockValue");
  });

  test("should execute function on change", () => {
    const inputEl = renderFormInput().getByTestId("form-input");

    fireEvent.change(inputEl, { target: { value: "input change" } });

    expect(mockHandleChange).toBeCalled();
  });

  test("should display label if prop was passed", () => {
    const labelEl = renderFormInput().getByTestId("label");
    expect(labelEl).toBeInTheDocument();
  });

  test("should not display label if prop wasn't passed", () => {
    const { queryByTestId } = render(
      <FormInput
        name="mockName"
        type="mockType"
        handleChange={mockHandleChange}
        value={"mockValue"}
        required
      />
    );

    const labelEl = queryByTestId("label");
    expect(labelEl).not.toBeInTheDocument();
  });

  test("label should have class shrink if value length > 0", () => {
    const labelEl = renderFormInput().getByTestId("label");
    expect(labelEl?.className.split(" ")[0]).toBe("shrink");
  });

  test("label should not have class shrink if value length = 0", () => {
    const { queryByTestId } = render(
      <FormInput
        name="mockName"
        type="mockType"
        handleChange={mockHandleChange}
        value={"mockValue"}
        required
      />
    );

    const labelEl = queryByTestId("label");
    expect(labelEl?.className.split(" ")[0]).not.toBe("shrink");
  });
});
