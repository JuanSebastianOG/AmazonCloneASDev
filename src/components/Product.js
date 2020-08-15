import React from 'react';
import '../css/Product.css';
import Card from '@material-ui/core/Card';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';

function Product({ id, title, price, rating, img }) {
    console.log(id);
  
    return (
        <Card className="product__card">
            <span className="product__title">{title}</span>
            <span>{price}USD</span>
            <Rating 
                name="read-only"
                value={rating}
                readOnly
            /> 
            <img className="product__img" src={img} alt="" />
            <button className="product_basketbtn">Add Basket</button>
        </Card>
    )
}

export default Product
