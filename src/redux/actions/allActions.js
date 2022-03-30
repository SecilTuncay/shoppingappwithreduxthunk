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
export const fetchProduct = (id) => async (dispatch) => {
  const response = await shoppingApi.get(`/products/${id}`);
  dispatch({ type: ActionTypes.FETCH_PRODUCT, payload: response });
};

export const fetchFavorites = () => async (dispatch) => {
  const response = await shoppingApi.get("/favorites");
  dispatch({ type: ActionTypes.FETCH_FAVORITES, payload: response });
};
export const addFavorites = () => async (dispatch) => {
  const response = await shoppingApi.post("/favorites");
  dispatch({ type: ActionTypes.ADD_TO_FAVORITES, payload: response });
};
export const removeFavorites = (id) => async (dispatch) => {
  const response = await shoppingApi.get("/favorites");
  dispatch({ type: ActionTypes.REMOVE_FROM_FAVORITES, payload: response });
};
