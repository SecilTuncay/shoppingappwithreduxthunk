import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/actions/allActions";

function AllProducts() {
  const productInfo = useSelector(state => state.product.product.data);
  console.log('productInfo: ', productInfo);


  const dispatch = useDispatch();

  useEffect(() => {
    for(var i=0;i<4;i++){
      dispatch(fetchProduct(i));
    }
    
  }, []);

  return (
    <div className="container">
      all products
    </div>
  );
}

export default AllProducts;