import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorites } from "../redux/actions/allActions";
import ProductCard from "./ProductCard";

function FavoritesListing() {
  const favorites = useSelector((state) => state.products.favorites.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4">Favoriler</h1>
      <hr />
      <div className="row flex-row p-2 m-auto">
        {favorites &&
          favorites.map((favorite, id) => {
            return <ProductCard key={id} data={favorite} />;
          })}
      </div>
    </div>
  );
}

export default FavoritesListing;
