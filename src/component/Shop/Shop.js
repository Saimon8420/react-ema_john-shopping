import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);
    const addToCart = item => {
        const newCart = [...cart, item];
        setCart(newCart);
        addToDb(item.id);
    }
    return (
        <div className='shop-display'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>
                    )
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button>Review order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;