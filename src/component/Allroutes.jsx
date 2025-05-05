import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import EthicWear from '../categories/Ethnicwear'
import Western from '../categories/Western-wear'
import Mens from '../categories/Mens-wear'
import Footwear from '../categories/Footwear'
import Decore from '../categories/Home-Decore'
import Accessories from '../categories/Accessories'
import Beauty from '../categories/Beauty'
import Grocery from '../categories/Grocery'
import CategoryPage from '../Goldproductpage'


import ProductDescription from '../Description'
import Description from '../Description'
import Cart from './Cart'
import CartPage from './Cart'




const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    
      <Route path='/ethic' element={<EthicWear/>} />
      <Route path='/westerndress' element={<Western />} />
      <Route path='/mens' element={<Mens/> } />
      <Route path='/footwear' element ={<Footwear />} />
      <Route path='/decore' element ={<Decore/> }/>
      <Route path='/beauty' element={<Beauty/>} />
      <Route path='/accessories' element={<Accessories/>} />
      <Route path='/grocery' element ={<Grocery />}/>

      
      <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="/:category/:id" element={<Description />} />

      <Route path="/cart" element={<CartPage />} /> 
    </Routes>
  )
}

export default Allroutes