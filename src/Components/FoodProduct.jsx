import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../style/ProductCard.css"
export default function ProductCard({name,img}) {
  return (
    <div style={{ width: '18rem' }} border="dark">
    <img variant="top" src={img} className='cardImg' alt='productImg'/>
    <div>
      <p className='productName'>{name} </p>
    </div>
  </div>
  )
}
