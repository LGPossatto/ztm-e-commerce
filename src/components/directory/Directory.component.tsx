import { data } from "../../utils/data";
import { MenuItem } from "../menu-item/MenuItem.component";

import "./directory.style.scss";

export const Directory = () => {
  return (
    <div data-testid="directory" className="directory">
      {data.map(({ id, title, imageUrl, size }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
        ></MenuItem>
      ))}
    </div>
  );
};
