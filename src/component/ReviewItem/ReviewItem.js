import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';
const ReviewItem = (props) => {
    const { product, handleRemoveProduct } = props;
    const { name, img, price, shipping, quantity } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-item-details'>
                <div className='item-details'>
                    <p className='product-name' title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</p>
                    <p>Price: <span className='orange-color'>{price}</span></p>
                    <p><small></small>Shipping: {shipping}</p>
                    <p><small></small>Quantity: {quantity}</p>
                </div>
                <div className='item-button'>
                    <button className='dl-btn' onClick={() => handleRemoveProduct(product)}>
                        <FontAwesomeIcon
                            className='btn'
                            icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ReviewItem;