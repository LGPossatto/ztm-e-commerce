import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./app.scss";
import { HomePage } from "./pages/home/HomePage.component";

export const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/hats" component={HomePage}></Route>
    </Switch>
  </BrowserRouter>
);
