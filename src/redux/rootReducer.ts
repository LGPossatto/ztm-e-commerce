import { combineReducers } from "redux";

import userReducer, { IUserReducer } from "./user/user.reducer";

export interface IRootState {
  user: IUserReducer;
}

export default combineReducers({
  user: userReducer,
});
