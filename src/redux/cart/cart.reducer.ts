import { TOGGLE_CART_HIDDEN } from "../types";

export interface ICartReducer {
  hidden: boolean;
}

const INITIAL_STATE: ICartReducer = {
  hidden: true,
};

const cartReducer = (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

export default cartReducer;
