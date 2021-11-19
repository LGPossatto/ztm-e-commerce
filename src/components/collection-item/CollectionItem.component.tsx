import "./CollectionItem.style.scss";
import { CustomButton } from "../custom-button/CustomButton.component";

export interface ICollectionItem {
  name: string;
  price: number;
  imageUrl: string;
}

export const CollectionItem = ({ name, price, imageUrl }: ICollectionItem) => {
  return (
    <div data-testid="collection-item" className="collection-item">
      <div
        data-testid="background-img"
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton invertedColor>Add to cart</CustomButton>
    </div>
  );
};
