import { combineReducers } from "redux";

import userReducer, { IUserReducer } from "./user/user.reducer";
import cartReducer, { ICartReducer } from "./cart/cart.reducer";

export interface IRootState {
  user: IUserReducer;
  cart: ICartReducer;
}

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
