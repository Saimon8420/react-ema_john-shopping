import React from 'react';
import './Product.css';
const Product = (props) => {
    const { img, name, price, seller, } = props.product;
    const { addToCart } = props;
    return (
        <div className='product-details'>
            <img src={img} alt="" />
            <p>{name}</p>
            <p><small>Price: {price}$</small></p>
            <p>Manufacturer: {seller}</p>
            <div>
                <button onClick={() => addToCart(props.product)}
                    className='btn-cart'>
                    <p>Add to Cart</p>
                </button>
            </div>
        </div >
    );
};

export default Product;