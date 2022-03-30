import React, { useEffect } from "react";
import { Carousel, Nav } from "react-bootstrap";
import { fetchSliders } from "../redux/actions/allActions";
import { useDispatch, useSelector } from "react-redux";

function Slider() {
  const sliderInfo = useSelector((state) => state.sliders.sliders.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSliders());
  }, []);

  return (
    <section>
      <div className="container">
        <Carousel prevLabel="" nextLabel="" indicators={false}>
          {sliderInfo &&
            sliderInfo.map((slider) => {
              const { productId, image } = slider;
              return (
                <Carousel.Item key={productId} interval={1500}>
                  <Nav>
                    <Nav.Link href={`/products/${productId}`}>
                      <img className="d-block w-100" src={`http://localhost:3000/${image}`} alt="" />
                    </Nav.Link>
                  </Nav>
                </Carousel.Item>
              );
            })}
        </Carousel>
      </div>
    </section>
  );
}

export default Slider;
