import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <nav className='display'>
            <img src={logo} alt="" />
            <div className='navigation'>
                <Link to="/home">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
            </div>
        </nav >
    );
};

export default Header;