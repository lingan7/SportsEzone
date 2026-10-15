import { useState } from 'react'
import './App.css'
import RegisterPage from './RegisterPage'
import LoginPage from './LoginPage'
import ProductListPage from './ProductListPage'
import PlaceOrderPage from './PlaceOrderPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
<BrowserRouter>
     <Routes>
       <Route path='/register' element={<RegisterPage/>}/>
       <Route path='/login' element={<LoginPage/>}/>
       <Route path='/products' element={<ProductListPage/>}/>
       <Route path='/order/:orderId' element={<PlaceOrderPage/>}/>
           
     </Routes>
</BrowserRouter>
  )
}

export default App
