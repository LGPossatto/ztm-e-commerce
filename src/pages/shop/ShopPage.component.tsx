import { shopData } from "../../assets/data/shop.data";

import "./shop-page.style.scss";
import { CollectionPreview } from "../../components/collection-preview/CollectionPreview.component";

export const ShopPage = () => {
  return (
    <div data-testid="shop-page" className="shop-page">
      <div className="shop-page">
        {shopData.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    </div>
  );
};
