import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'

const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
        
    </Routes>
  )
}

export default Allroutes