import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
            <footer id="footer" className="section footer">
        <div className="container">
            <div className="footer-container">
            <div className="footer-center">
                <h3>EXTRAS</h3>
                <Link to="/">Brands</Link>
                <Link to="/">Gift Certificates</Link>
                <Link to="/">Affiliate</Link>
                <Link to="/">Specials</Link>
                <Link to="/">Site Map</Link>
            </div>
            <div className="footer-center">
                <h3>INFORMATION</h3>
                <Link to="/">About Us</Link>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Terms &amp; Conditions</Link>
                <Link to="/">Contact Us</Link>
                <Link to="/">Site Map</Link>
            </div>
            <div className="footer-center">
                <h3>MY ACCOUNT</h3>
                <Link to="/">My Account</Link>
                <Link to="/">Order History</Link>
                <Link to="/">Wish List</Link>
                <Link to="/">Newsletter</Link>
                <Link to="/">Returns</Link>
            </div>
            <div className="footer-center">
                <h3>CONTACT US</h3>
                <div>
                <span>
                    <i className="fas fa-map-marker-alt" />
                </span> 42 Dream House, Dreammy street, 7131 Dreamville, USA
                </div>
                <div>
                <span>
                    <i className="far fa-envelope" />
                </span> company@gmail.com
                </div>
                <div>
                <span>
                    <i className="fas fa-phone" />
                </span> 456-456-4512
                </div>
                <div>
                <span>
                    <i className="far fa-paper-plane" />
                </span> Dream City, USA
                </div>
            </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer
