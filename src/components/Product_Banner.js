import React from 'react'
import { Link } from 'react-router-dom'

function Product_Banner() {
    return (
        <section className="section">
        <div className="product-banner">
            <div className="left">
            <img src="./images/test.jpg" alt="" />
            </div>
            <div className="right">
            <div className="content">
                <h2><span className="discount">70% </span> SALE OFF</h2>
                <h1>
                <span>Collect Your</span>
                <span>Kids Collection</span>
                </h1>
                <Link className="btn" to="/">shop now</Link>
            </div>
            </div>
        </div>
        </section>

    )
}

export default Product_Banner
