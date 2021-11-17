import { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setCurrentUser } from "./redux/user/user.actions";
import { IRootState } from "./redux/rootReducer";

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
  const currentUser = useSelector(
    (state: IRootState) => state.user.currentUser
  );
  const dispatch = useDispatch();

  const onLogout = () => {
    auth.signOut();
    //setCurrentUserS(null);
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        // console.log(userAuth);

        await createUserProfileDocument(userAuth as IUserAuth);

        try {
          dispatch(
            setCurrentUser({
              uid: userAuth.uid,
              displayName: userAuth.displayName!,
              email: userAuth.email!,
            })
          );
        } catch (err) {
          console.error(err);
        }
      }
    });

    // eslint-disable-next-line
  }, []);

  /* useEffect(() => {
    console.log(currentUser);
  }, [currentUser]); */

  return (
    <BrowserRouter>
      <Header onLogout={onLogout}></Header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
        <Route
          exact
          path="/auth"
          render={() =>
            currentUser ? <Redirect to="/"></Redirect> : <AuthPage></AuthPage>
          }
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};
