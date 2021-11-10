import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";

import { data } from "../../../utils/data";

import { MenuItem } from "../MenuItem.component";

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
  useRouteMatch: () => ({ path: "/useRouteMatch/" }),
}));

describe("MenuItem", () => {
  test("should display proper text", () => {
    render(
      <MenuItem
        title={data[0].title}
        imageUrl={data[0].imageUrl}
        size={data[0].size}
        linkUrl={data[0].linkUrl}
      />,
      { wrapper: MemoryRouter }
    );

    screen.getByText(data[0].title.toUpperCase());
  });

  test("should have normal size", () => {
    const { container } = render(
      <MenuItem
        title={data[0].title}
        imageUrl={data[0].imageUrl}
        size={"normal"}
        linkUrl={data[0].linkUrl}
      />,
      { wrapper: MemoryRouter }
    );

    //@ts-ignore
    expect(container.firstChild.classList.contains("normal")).toBe(true);
  });

  test("should have large size", () => {
    const { container } = render(
      <MenuItem
        title={data[0].title}
        imageUrl={data[0].imageUrl}
        size={"large"}
        linkUrl={data[0].linkUrl}
      />,
      { wrapper: MemoryRouter }
    );

    //@ts-ignore
    expect(container.firstChild.classList.contains("large")).toBe(true);
  });

  test("should display background image", () => {
    const background = render(
      <MenuItem
        title={data[0].title}
        imageUrl={data[0].imageUrl}
        size={data[0].size}
        linkUrl={data[0].linkUrl}
      />,
      { wrapper: MemoryRouter }
    ).getByTestId("background-image");

    expect(background).toHaveStyle(
      `background-image: url(${data[0].imageUrl})`
    );
  });

  test("should navigate to correct page", () => {
    const { container } = render(
      <MenuItem
        title={data[0].title}
        imageUrl={data[0].imageUrl}
        size={data[0].size}
        linkUrl={data[0].linkUrl}
      />,
      { wrapper: MemoryRouter }
    );

    //@ts-ignore
    fireEvent.click(container.firstChild);
    expect(mockHistoryPush).toHaveBeenCalledWith(
      `/useRouteMatch/${data[0].linkUrl}`
    );
  });
});
