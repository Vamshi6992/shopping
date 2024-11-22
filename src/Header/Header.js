import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Header.scss";


const Header = () => {
  return (
    <div className='navbar'>
        <div className='wrapper'>
        <div className='left'>
            <div className="item">
                <span>USD</span>
                <KeyboardArrowDownIcon/>
            </div>
            <div className='item'>
                <Link className='link' to="/products/1" >Women</Link>
            </div>
            <div className='item'>
                <Link className='link' to="/products/2">Men</Link>
            </div>
            <div className='item'>
                <Link className='link' to="/products/3">Children</Link>
            </div>
            <div className='item'>
                <Link className='link' to="/products/4">Accessories</Link>
            </div>
        </div>
        <div className='center'>
            <div className='item'>
                <Link className='link' to="/">LAMASTORE</Link>
            </div>
        </div>
        <div className='right'>
            <div className='item'>
                <Link className='link' to="/">Home</Link>
            </div>
            <div className='item'>
                <Link className='link' to="/">About</Link>
            </div>
            <div className='item'>
                <Link className='link' to="/">Contact</Link>
            </div>
            <div className='item'>
                <Link className='link' to="/">Store</Link>
            </div>
            <div className='icons'>
                <SearchIcon/>
                <PersonOutlineIcon/>
                <FavoriteBorderIcon/>
                <div className='cart'>
                    <ShoppingCartIcon/>
                    <span className='cartIcon'>0</span>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Header