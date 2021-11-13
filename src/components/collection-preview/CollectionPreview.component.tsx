import "./CollectionPreview.style.scss";
import {
  CollectionItem,
  ICollectionItem,
} from "../collection-item/CollectionItem.component";

interface INewCI extends ICollectionItem {
  id: number;
}

interface props {
  title: string;
  items: INewCI[];
}

export const CollectionPreview = ({ title, items }: props) => {
  return (
    <div data-testid="collection-preview" className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};
