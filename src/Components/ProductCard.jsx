import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../style/ProductCard.css"
export default function ProductCard({name,material,size,img}) {
  return (
    <div style={{ width: '18rem' }} border="dark">
    <img variant="top" src={img} className='cardImg' alt='productImg'/>
    <div>
      <p className='productName'>{name} </p>
      <div className='productInfo'>
        <p><span>Material:- </span>{material} </p>
        <p><span>Size:- </span>{size} </p>
      </div>
    </div>
  </div>
  )
}
