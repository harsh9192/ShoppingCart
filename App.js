import React, { useState } from 'react'
import ProductList from './components/ProductList'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CartItems from './components/CartItems'
import WishList from './components/WishList'

function App() {
 const [cart, setCart] = useState([])
 const [wishlist, setWishList] = useState([]) 
 
  return (
    <>
    <Router>
    <NavBar cart={cart} setCart={setCart} wishlist={wishlist} setWishList={setWishList}/>
    <Routes>
      <Route path='/' element={<ProductList cart={cart} setCart={setCart} wishlist={wishlist} setWishList={setWishList}/>}/>
      <Route path='/cart' element={<CartItems cart={cart} setCart={setCart}/>}/>
      <Route path='/wishlist' element={<WishList wishlist={wishlist} setWishList={setWishList}/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App

