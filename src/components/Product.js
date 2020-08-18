import React from 'react';
import '../css/Product.css';
import Card from '@material-ui/core/Card';
import Rating from '@material-ui/lab/Rating';


function Product({ id, title, price, rating, imgUrl }) {
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
            <img className="product__img" src={imgUrl} alt="" />
            <button className="product_basketbtn">Add Basket</button>
        </Card>
    )
}

export default Product
