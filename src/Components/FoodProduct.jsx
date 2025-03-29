import React from 'react';
import Card from 'react-bootstrap/Card';
import "../style/ProductCard.css";

export default function FoodProduct({ name, img }) {
  return (
    <Card style={{ width: '18rem' }} border="dark">
      <Card.Img variant="top" src={img} className="cardImg" alt="productImg" />
      <Card.Body>
        <p className="productName">{name}</p>
      </Card.Body>
    </Card>
  );
}
