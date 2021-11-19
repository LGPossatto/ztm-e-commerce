import { render, fireEvent } from "@testing-library/react";

import { shopData } from "../../../assets/data/shop.data";

import { CollectionItem } from "../CollectionItem.component";

const name = shopData[0].items[0].name;
const price = shopData[0].items[0].price;
const imageUrl = shopData[0].items[0].imageUrl;

const renderCollectionItem = () =>
  render(<CollectionItem name={name} price={price} imageUrl={imageUrl} />);

describe("CollectionItem", () => {
  test("should render without crashing", () => {
    renderCollectionItem();
  });

  test("should display background image", () => {
    const backgroundImg = renderCollectionItem().getByTestId("background-img");

    expect(backgroundImg).toHaveStyle(`background-image: url("${imageUrl}")`);
  });

  test("should display product name", () => {
    const productName = renderCollectionItem().getByText(name);

    expect(productName).toBeInTheDocument();
  });

  test("should display product price", () => {
    const productPrice = renderCollectionItem().getByText(price);

    expect(productPrice).toBeInTheDocument();
  });

  test("should render add to cart button", () => {
    const button = renderCollectionItem().getByText("Add to cart");
    expect(button).toBeInTheDocument();
  });
});
