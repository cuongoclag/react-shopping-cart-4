import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Cart({cart, setCart, setQuantity}) {

    if(cart.length === 0)
        return <h2 style={{textAlign: "center", fontSize: "4rem"}}>Cart Empty</h2>

    const removeCart = (productRemove) => {
        setCart(cart.filter((product) => product !== productRemove))
        };

    const getTotalSum = () => {
        return cart.reduce((sum, {price, quantity}) => sum + price * quantity, 0);
    };

    const getTotalProduct = (id) => {
        return cart.reduce((sum, {price, quantity}) => sum + price * quantity, 0);
    };


    return (
        <div className="container-md cart">
        <table>
            <tbody><tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </tr>
            {
                cart.map((product, index) => (
                    <tr key={index}>
                        <td>
                        <div className="cart-info">
                            <img src={product.image} alt />
                            <div>
                            <p>{product.title}</p>
                            <span>Price: ${product.price}</span>
                            <br/>
                            <Link to="#" onClick={() => removeCart(product)}>Remove</Link>
                            </div>
                        </div>
                        </td>
                        <td>
                        <input 
                            type="number" 
                            defaultValue={product.quantity}  
                            min={1}
                            onChange={(e) => setQuantity(product, parseInt(e.target.value))}
                            value={product.quantity} />
                        </td>
                        <td>${getTotalProduct(product.id)}</td>
                    </tr>
                ))
            }
            </tbody></table>
        <div className="total-price">
            <table>
            <tbody>
                {/* <tr>
                <td>Subtotal</td>
                <td>$200</td>
                </tr>
                <tr>
                <td>Tax</td>
                <td>$50</td>
                </tr> */}
                <tr>
                <td>Total</td>
                <td>${getTotalSum()}</td>
                </tr>
            </tbody></table>
            <Link to="/" className="checkout btn">Proceed To Checkout</Link>
        </div>
        </div>

    )
}

export default Cart
