import "./menu-item.style.scss";

interface props {
  title: string;
  imageUrl: string;
  size: string;
}

export const MenuItem = ({ title, imageUrl, size }: props) => {
  return (
    <div data-testid="menu-item" className={`menu-item ${size}`}>
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
