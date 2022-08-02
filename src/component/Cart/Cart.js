import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    console.log(props.children);
    let total = 0;
    let totatShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        total = total + product.price;
        totatShipping = totatShipping + product.shipping;
        quantity = quantity + 1;
    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = (total + totatShipping + parseFloat(tax));
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: {total}$</p>
            <p>Total Shipping Charge: {totatShipping}$</p>
            <p>Tax: {tax}$</p>
            <h5>Grand Total: {grandTotal.toFixed(2)}$</h5>
            {props.children}
        </div>
    );
};

export default Cart;