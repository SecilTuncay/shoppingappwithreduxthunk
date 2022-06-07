import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/actions/allActions";
import { Nav } from "react-bootstrap";

function Categories() {
	const categoriesInfo = useSelector(state => state.categories.categories.data);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCategories());
	}, []);

	return (
		<section className="categories mt-5">
			<div className="container">
				<div className="row justify-content-center mt-4">
					<h5 className="text-center mb-4">Kategoriler</h5>
					<div className="d-flex flex-row justify-content-center">
						{categoriesInfo &&
							categoriesInfo.map(category => {
								const { id, name, description } = category;
								return (
									<Nav.Link key={id} href={`/categories/${id}/products`}>
										<button
											key={id}
											type="button"
											className="btn categories__btn m-2"
										>
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
