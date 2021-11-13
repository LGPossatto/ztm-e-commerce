import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.scss";
import { Header } from "./components/header/Header.component";
import { HomePage } from "./pages/home/HomePage.component";
import { ShopPage } from "./pages/shop/ShopPage.component";

export const App = () => (
  <BrowserRouter>
    <Header></Header>
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/shop" component={ShopPage}></Route>
    </Switch>
  </BrowserRouter>
);
