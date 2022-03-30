import { ActionTypes } from "../constants/action-types";

const initialState = {
  categories: [],
  categoryProducts: [],
};

export const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_CATEGORIES:
      return { ...state, categories: payload };
    case ActionTypes.FETCH_CATEGORY_PRODUCTS:
      return { ...state, categoryProducts: payload };
    default:
      return state;
  }
};
