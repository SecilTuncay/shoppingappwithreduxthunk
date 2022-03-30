import { ActionTypes } from "../constants/action-types";
import shoppingApi from "../../apis/shoppingApi";

export const fetchSliders = () => async (dispatch) => {
  const response = await shoppingApi.get("/sliders");
  dispatch({ type: ActionTypes.FETCH_SLIDERS, payload: response });
};

/* //dispatch({ type: ActionTypes.FETCH_SLIDERS, payload: response });
export const fetchCategories = () => async dispatch => {
	const response = await katalogAppApi.get("/categories");

	dispatch({ type: ActionTypes.FETCH_CATEGORIES, payload: response });
}; */

export const setSliders = (sliders) => {
  return {
    type: ActionTypes.SET_SLIDERS,
    payload: sliders,
  };
};

export const setCategories = (categories) => {
  return {
    type: ActionTypes.SET_CATEGORIES,
    payload: categories,
  };
};

export const getProduct = (product) => {
  return {
    type: ActionTypes.GET_PRODUCT,
    payload: product,
  };
};
export const getProducts = (products) => {
  return {
    type: ActionTypes.GET_PRODUCTS,
    payload: products,
  };
};
export const getCategoryProducts = (categoryProducts) => {
  return {
    type: ActionTypes.GET_CATEGORY_PRODUCTS,
    payload: categoryProducts,
  };
};
export const getFavorites = (favorites) => {
  return {
    type: ActionTypes.GET_FAVORITES,
    payload: favorites,
  };
};
