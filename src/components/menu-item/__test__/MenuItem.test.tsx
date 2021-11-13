import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { MenuItem } from "../MenuItem.component";

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
  useRouteMatch: () => ({ path: "/useRouteMatch/" }),
}));

const mockMenuItem = (size = "normal", linkUrl = "mockLink") => (
  <BrowserRouter>
    <MenuItem
      title={"mockTitle"}
      imageUrl={"mockImage"}
      size={size}
      linkUrl={linkUrl}
    />
  </BrowserRouter>
);

describe("MenuItem", () => {
  test("should display proper text", () => {
    render(mockMenuItem());

    screen.getByText("MOCKTITLE");
  });

  test("should have normal size", () => {
    const { container } = render(mockMenuItem());

    //@ts-ignore
    expect(container.firstChild.classList.contains("normal")).toBe(true);
  });

  test("should have large size", () => {
    const { container } = render(mockMenuItem("large"));

    //@ts-ignore
    expect(container.firstChild.classList.contains("large")).toBe(true);
  });

  test("should display background image", () => {
    const background = render(mockMenuItem()).getByTestId("background-image");

    expect(background).toHaveStyle("background-image: url(mockImage)");
  });

  test("should navigate to correct page", () => {
    const { container } = render(mockMenuItem());

    //@ts-ignore
    fireEvent.click(container.firstChild);
    expect(mockHistoryPush).toHaveBeenCalledWith("/useRouteMatch/mockLink");
  });
});
