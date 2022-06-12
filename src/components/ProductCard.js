import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far);

function ProductCard(props) {
  const categoryNames = ["Elektronik", "Moda", "Kitap"];
  const categoryName = categoryNames[props.data.category - 1];
  const url = "http://localhost:3000";
  function addToFavorites(e) {
    console.log(e);
  }
  const { id, productImage, name, description, isFavorite } = props.data;
  
  return (
    <div className="col-lg-3 my-2">
      <Card className="card-cont" key={id}>
        <Link className="card-cont__link" to={`/products/${id}`}>
          <Card.Img className="img img-fluid" variant="top" src={url + `/${productImage}`} />
        </Link>
        <Card.Body>
          <Card.Title className="card-cont__productname mb-2">{name}</Card.Title>
          <Card.Text className="card-cont__categoryname mb-2">{categoryName}</Card.Text>
          <Card.Text className="card-cont__description">{description}</Card.Text>
        </Card.Body>
        <Card.Footer className="p-3">
          <p onClick={addToFavorites}>
            {isFavorite ? <FontAwesomeIcon icon="fa-solid fa-heart" /> : <FontAwesomeIcon icon="fa-regular fa-heart" />} {""} <span className="ms-2"></span>Favorilere Ekle
          </p>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ProductCard;
