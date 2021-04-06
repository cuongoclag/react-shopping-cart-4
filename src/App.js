import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Products from './components/Products'
import Details from './components/Details'
import Cart from './components/Cart'

function App() {
  const [products, setProducts] = useState([]);

  //Cart
  const [cart, setCart] = useState([]);

  //Search tên
  const [query, setQuery] = useState("");

 //Gọi API Product
 useEffect(() => {
  axios.get(`https://606730cf98f405001728e82c.mockapi.io/products?title=${query}`)
  .then(function (response) {
      setProducts(response.data);
  })
  .catch(function (error) {
      console.log(error);
  });
}, [query])

useEffect(() => {
  const cart = JSON.parse(localStorage.getItem('cart'))
  if(cart) setCart(cart)
}, [])

useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(cart))
}, [cart])

const addCart = (product) => {
  let newCart = [...cart];
  let itemInCart = newCart.find((item) => product.id === item.id);
  if(itemInCart){
    itemInCart.quantity++;
  }else{
    itemInCart = {
      ...product,
      quantity : 1,
    };
    newCart.push(itemInCart);
  }
  setCart(newCart);
};

const getCartLength = () => {
  return cart.reduce((sum, {quantity}) => sum + quantity, 0);
};

const setQuantity = (product, amount) => {
  const newCart = [...cart];
  newCart.find(item => item.id === product.id).quantity = amount;
  setCart(newCart);
}

  return (
  <Router>
    <Navbar cart={cart} getCartLength={getCartLength}/>
    <Switch>
      <Route path="/home" exact >
        <Home />
      </Route>
      <Route path="/product" exact >
        <Products products={products} setProducts={setProducts} getQuery={(q) => setQuery(q)} addCart={addCart}/>
      </Route>
      <Route path="/product/:id" exact >
        <Details products={products} addCart={addCart}/>
      </Route>
      <Route path="/cart" exact >
        <Cart cart={cart} setCart={setCart} setQuantity={setQuantity}/>
      </Route>
    </Switch>
    <Footer />
  </Router> 
  );
}

export default App;
