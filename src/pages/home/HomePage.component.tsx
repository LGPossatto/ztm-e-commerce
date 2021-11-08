import "./home-page.style.scss";
import { Directory } from "../../components/directory/Directory.component";

export const HomePage = () => {
  return (
    <div data-testid="home-page" className="home-page">
      <Directory></Directory>
    </div>
  );
};
