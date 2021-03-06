
import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (

        <nav className="header">
            {/* Amazon Logo */}
            <Link to="/">
                <img
                    className="header__logo"
                    src="https://images-fe.ssl-images-amazon.com/images/G/35/gc/designs/livepreview/amazon_logo_noto_email_v2016_au-main._CB444479176_.png"
                    alt=""></img>
            </Link>
            {/* Search Bar */}
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            {/*Links of Nav*/}
            <div className="header__nav">

                {/*1nd link*/}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Sepo</span>
                        <span className="header__optionLineTwo" >Sign In</span>
                    </div>
                </Link>
                {/*2nd link*/}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne" >Return</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                {/*3nd link*/}
                <Link to="/AddProducts" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne" >Add</span>
                        <span className="header__optionLineTwo">Product</span>
                    </div>
                </Link>
                {/*4th link*/}
                <Link to="/checkout" className="header__checkout">
                    <div className="header__optionBasket">
                        {/*Shopping basket icon*/}
                        <ShoppingBasketIcon/>
                        <span className= "cant_Shopping">0</span>
                        {/*Number of Products*/}
                    </div>
                    
                </Link>
            </div>

        </nav>
    )
}

export default Header
