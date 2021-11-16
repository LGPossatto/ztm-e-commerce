import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { onAuthStateChanged } from "@firebase/auth";
import {
  auth,
  createUserProfileDocument,
  IUserAuth,
} from "./firebase/firebase.utils";

import "./App.scss";
import { Header } from "./components/header/Header.component";
import { HomePage } from "./pages/home/HomePage.component";
import { AuthPage } from "./pages/auth/AuthPage.component";
import { ShopPage } from "./pages/shop/ShopPage.component";

export const App = () => {
  const [currentUser, setCurrentUser] = useState<IUserAuth | null>(null);

  const onLogout = () => {
    auth.signOut();
    setCurrentUser(null);
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        console.log(userAuth);

        const userRef = await createUserProfileDocument(userAuth as IUserAuth);

        try {
          if (userRef) {
            setCurrentUser({
              uid: userAuth.uid,
              displayName: userAuth.displayName!,
              email: userAuth.email!,
            });
          }
        } catch (err) {
          console.error(err);
        }
      }
    });

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  return (
    <BrowserRouter>
      <Header user={currentUser} onLogout={onLogout}></Header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/auth" component={AuthPage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
      </Switch>
    </BrowserRouter>
  );
};
