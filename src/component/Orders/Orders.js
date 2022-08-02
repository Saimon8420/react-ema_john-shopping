import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const navigate = useNavigate();

    const handleRemoveProduct = product => {
        // console.log(product);
        const rest = cart.filter(pro => pro.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }
    return (
        <div className='shop-display'>
            <div className='products-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    {/* <Link to="/inventory"><button>Proceed checkout</button></Link> */}
                    <button onClick={() => navigate('/inventory')}>Proceed checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;