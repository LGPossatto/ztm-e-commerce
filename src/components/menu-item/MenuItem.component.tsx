import { useHistory, useRouteMatch } from "react-router-dom";

import "./MenuItem.style.scss";

interface props {
  title: string;
  imageUrl: string;
  size: string;
  linkUrl: string;
}

export const MenuItem = ({ title, imageUrl, size, linkUrl }: props) => {
  const { push } = useHistory();
  const { path } = useRouteMatch();

  return (
    <div
      data-testid="menu-item"
      className={`menu-item ${size}`}
      onClick={() => {
        push(`${path}${linkUrl}`);
      }}
    >
      <div
        data-testid="background-image"
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
