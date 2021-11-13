import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Header } from "../Header.component";

const renderHeader = () => render(<Header />, { wrapper: BrowserRouter });

describe("Header", () => {
  test("should render Header without crashing", () => {
    renderHeader();
  });

  test("should display logo", () => {
    const logo = renderHeader().getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });

  test("should display shop link", () => {
    const shopEl = renderHeader().getByText("SHOP");
    expect(shopEl).toBeInTheDocument();
  });

  test("should display contact link", () => {
    const contactEl = renderHeader().getByText("CONTACT");
    expect(contactEl).toBeInTheDocument();
  });

  test("should navigate to / when clicking logo", () => {
    const logo = renderHeader().getByTestId("logo");
    fireEvent.click(logo);

    expect(window.location.pathname).toBe("/");
  });

  test("should navigate to /shop when clicking shop link", () => {
    const shopEl = renderHeader().getByText("SHOP");
    fireEvent.click(shopEl);

    expect(window.location.pathname).toBe("/shop");
  });

  test("should navigate to /contact when clicking contact link", () => {
    const contactEl = renderHeader().getByText("CONTACT");
    fireEvent.click(contactEl);

    expect(window.location.pathname).toBe("/contact");
  });
});
