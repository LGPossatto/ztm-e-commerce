import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import { createStore } from "redux";
import rootReducer from "../../redux/rootReducer";

export const renderWithRedux = (
  Component: any,
  currentUser: boolean = false,
  cartHidden: boolean = false
) => {
  const mockStore = createStore(rootReducer, {
    user: { currentUser },
    cart: { hidden: cartHidden },
  });

  return render(<Provider store={mockStore}>{Component}</Provider>);
};
