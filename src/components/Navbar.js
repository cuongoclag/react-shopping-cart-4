import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar({cart, getCartLength}) {

    const [menu, setMenu] = useState(false);

    const handleShowMenu = () => {
        setMenu(!menu);
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }
    return (
        <header id="home" className="header">
            {/* Navigation */}
            <nav className="nav">
                <div className="navigation container">
                    <div className="logo">
                        <h1>Codevo</h1>
                    </div>
                    <div className="menu" style={styleMenu}>
                        <div className="top-nav">
                            <div className="logo">
                                <h1>Codevo</h1>
                            </div>
                            <div className="close" onClick={handleShowMenu}>
                                <i className="bx bx-x" />
                            </div>
                        </div>
                        <ul className="nav-list">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link scroll-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/product" className="nav-link">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link scroll-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link scroll-link">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/account" className="nav-link scroll-link">Account</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link icon">
                                <span className="number-cart">{getCartLength()}</span>
                                <i className="bx bx-shopping-bag" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/cart" className="cart-icon">
                        <span className="number-cart">{getCartLength()}</span>
                        <i className="bx bx-shopping-bag" />
                    </Link>
                    <div className="hamburger" onClick={handleShowMenu}>
                        <i className="bx bx-menu" />
                    </div>
                </div>
            </nav>
            {/* Hero */}
            <img src="./images/banner.png" alt="" className="hero-img" />
            <div className="hero-content">
                <h2><span className="discount">70% </span> SALE OFF</h2>
                <h1>
                    <span>Summer Vibes</span>
                    <span>mode on</span>
                    </h1>
                <Link className="btn" to="/product">shop now</Link>
            </div>
        </header>

    )
}

export default Navbar
