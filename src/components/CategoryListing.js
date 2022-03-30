import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCategoryProducts } from "../redux/actions/allActions";
import ProductCard from "./ProductCard";

function CategoryListing() {
  const { categoryId } = useParams();
  const categoryProducts = useSelector((state) => state.categories.categoryProducts.data);
  const dispatch = useDispatch();
  const categoryNames = ["Elektronik", "Moda", "Kitap"];

  useEffect(() => {
    dispatch(fetchCategoryProducts(categoryId));
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4">{categoryNames[categoryId - 1]}</h1>
      <hr />
      <div className="row flex-row p-2 m-auto">
        {categoryProducts &&
          categoryProducts.map((product, id) => {
            return <ProductCard key={id} data={product} />;
          })}
      </div>
    </div>
  );
}

export default CategoryListing;
