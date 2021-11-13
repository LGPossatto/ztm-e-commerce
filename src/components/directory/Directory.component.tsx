import { sectionsData } from "../../assets/data/sections.data";
import { MenuItem } from "../menu-item/MenuItem.component";

import "./Directory.style.scss";

export const Directory = () => {
  return (
    <div data-testid="directory" className="directory">
      {sectionsData.map(({ id, ...props }) => (
        <MenuItem key={id} {...props}></MenuItem>
      ))}
    </div>
  );
};
