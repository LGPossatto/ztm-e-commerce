import { render, screen } from "@testing-library/react";

import { data } from "../../../utils/data";

import { MenuItem } from "../MenuItem.component";

describe("Directory", () => {
  test("should display proper text", () => {
    render(
      <MenuItem
        title={data[0].title}
        imageUrl={data[0].imageUrl}
        size={data[0].size}
      />
    );

    screen.getByText(data[0].title.toUpperCase());
  });

  test("should have normal size", () => {
    const { container } = render(
      <MenuItem
        title={data[0].title}
        imageUrl={data[0].imageUrl}
        size={"normal"}
      />
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
      />
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
      />
    ).getByTestId("background-image");

    expect(background).toHaveStyle(
      `background-image: url(${data[0].imageUrl})`
    );
  });
});
