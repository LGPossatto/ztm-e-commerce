import { render } from "@testing-library/react";

import { shopData } from "../../../assets/data/shop.data";

import { CollectionPreview } from "../CollectionPreview.component";

const title = shopData[0].title;
const items = shopData[0].items;

const renderCollectionPreview = () =>
  render(<CollectionPreview title={title} items={items} />);

describe("CollectionPreview", () => {
  test("should render without crashing", () => {
    renderCollectionPreview();
  });

  test("should render heading with correct text", () => {
    const headingEl = renderCollectionPreview().getByText(title.toUpperCase());
    expect(headingEl).toBeInTheDocument();
  });

  test("should display 4 CollectionItem", () => {
    const collectionItems =
      renderCollectionPreview().getAllByTestId("collection-item");
    expect(collectionItems.length).toBe(4);
  });
});
