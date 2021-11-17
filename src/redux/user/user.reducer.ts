import { SET_CURRENT_USER } from "../types";

import { TUser } from "./user.actions";

export interface IUserReducer {
  currentUser: TUser | null;
}

const INITIAL_STATE: IUserReducer = {
  currentUser: null,
};

const userReducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
