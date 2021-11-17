import { SET_CURRENT_USER } from "../types";

export type TUser = {
  uid: string;
  displayName: string;
  email: string;
};

export const setCurrentUser = (user: TUser) => ({
  type: SET_CURRENT_USER,
  payload: user,
});
