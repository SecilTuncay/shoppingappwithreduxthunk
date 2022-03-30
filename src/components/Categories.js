import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/actions/allActions";
import { Nav } from "react-bootstrap";

function Categories() {
  const categoriesInfo = useSelector((state) => state.categories.categories.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <section className="mt-4">
      <div className="container d-flex flex-row justify-content-center ">
        <div className="categories--container d-flex flex-column justify-content-center mt-4">
          <h2 className="text-center mb-4">Kategoriler</h2>
          <div className="d-flex flex-row justify-content-center">
            {categoriesInfo &&
              categoriesInfo.map((category) => {
                const { id, name, description } = category;
                return (
                  <Nav.Link key={id} href={`/categories/${id}/products`}>
                    <button key={id} type="button" className="btn categories--btn m-2">
                      {name}
                    </button>
                  </Nav.Link>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
