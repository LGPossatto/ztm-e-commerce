import { render } from "@testing-library/react";

import { renderWithRedux } from "../../../assets/helpers/test.helper";
import { shopData } from "../../../assets/data/shop.data";

import { ShopPage } from "../ShopPage.component";

describe("ShopPage", () => {
  test("should render ShopPage", () => {
    renderWithRedux(<ShopPage />);
  });

  test("should render every CollectionPreview", () => {
    const collectionPreviews = render(<ShopPage />).getAllByTestId(
      "collection-preview"
    );

    expect(collectionPreviews.length).toBe(shopData.length);
  });
});
