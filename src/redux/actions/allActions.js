import { ActionTypes } from "../constants/action-types";
import shoppingApi from "../../apis/shoppingApi";

export const fetchSliders = () => async (dispatch) => {
  const response = await shoppingApi.get("/sliders");
  dispatch({ type: ActionTypes.FETCH_SLIDERS, payload: response });
};

export const fetchCategories = () => async (dispatch) => {
  const response = await shoppingApi.get("/categories");
  dispatch({ type: ActionTypes.FETCH_CATEGORIES, payload: response });
};

export const fetchCategoryProducts = (id) => async (dispatch) => {
  const response = await shoppingApi.get(`/categories/${id}/products`);
  console.log("file: allActions.js - line 30 - response", response);
  dispatch({ type: ActionTypes.FETCH_CATEGORY_PRODUCTS, payload: response });
};

export const fetchFavorites = () => async (dispatch) => {
  const response = await shoppingApi.get("/favorites");
  dispatch({ type: ActionTypes.FETCH_FAVORITES, payload: response });
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
