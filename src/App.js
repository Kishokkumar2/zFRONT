import React, { useState } from 'react'



import {Routes,Route} from "react-router-dom"

import Home from './home/Home'
import Cart from './cart/Cart'
import Menu1 from './home/Menu1'

import Login from './Login/Login'
import Navbar from './Navbar'
import NotFound from './404/NotFound'

import Place from './place order/Place'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






const App = () => {
  const [login,setLogin] =useState(false)
  return (
    
     <main>
      <ToastContainer />
    {login?<Login setLogin={setLogin} />:<></>}
    <div>
      <Navbar setLogin={setLogin}  />
  <Routes>
   

    <Route path='/' element={<Home />}></Route>
    <Route path='/cart' element={<Cart />}></Route>
    <Route path='/menu1' element={<Menu1 />}></Route>
    <Route path='*' element={<NotFound />}></Route>
    <Route path='/place' element={<Place />}></Route>
   

    

    
   
   
    
 
    
   
    
    
    
    </Routes>
    
    
</div>
</main>
  )
}

export default App