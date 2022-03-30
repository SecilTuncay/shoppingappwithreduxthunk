import { ActionTypes } from "../constants/action-types";

const initialState = {
  product: [],
  products: [],
  favorites: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PRODUCT:
      return { ...state, product: payload };
    case ActionTypes.FETCH_FAVORITES:
      return { ...state, favorites: payload };
    case ActionTypes.ADD_TO_FAVORITES:
      return { ...state, favorites: payload };
    case ActionTypes.REMOVE_FROM_FAVORITES:
      return { ...state, favorites: payload };
    default:
      return state;
  }
};
