import React, { useEffect, useState } from "react";
import { Carousel, Nav } from "react-bootstrap";
import { fetchSliders } from "../redux/actions/allActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Slider() {
	const sliderInfo = useSelector(state => state.sliders.sliders.data);
	console.log("sliderInfo: ", sliderInfo);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchSliders());
	}, []);

	return (
		<section>
			<div className="container">
				<Carousel prevLabel="" nextLabel="" indicators={false} className="carousel-main">
					{sliderInfo &&
						sliderInfo.map(sliderItem => {
							const { productId, image } = sliderItem;
							return (
								<Carousel.Item key={productId}>
									<Nav>
										<Nav.Link className="p-0" href={`/products/${productId}`}>
											<img
												className="d-block img-fluid"
												src={`http://localhost:3000/${image}`}
												alt=""
											/>
										</Nav.Link>
									</Nav>
								</Carousel.Item>
							);
						})}
				</Carousel>

				{/*   <Carousel prevLabel="" nextLabel="" indicators={false}>
          {sliderInfo &&
            sliderInfo.map((slider) => {
              const { productId, image } = slider;
              return (
                <Carousel.Item key={productId} interval={1500}>
                  <Link to={`/products/${productId}`}>
                      <img className="d-block w-100" src={`http://localhost:3000/${image}`} alt="" />
                  </Link>
                </Carousel.Item>
              );
            })}
        </Carousel> */}
			</div>
		</section>
	);
}

export default Slider;
