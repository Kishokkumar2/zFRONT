import React, { useContext } from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from './Menu/CONTEXT/StoreContext';

import { assets } from './assets/assets';

const Navbar = ({setLogin}) => {
  const navi=useNavigate()
  const {token,setToken}=useContext(StoreContext)
  const logout = (e)=>{
    e.preventDefault()
    setToken("")
   
   navi('/')

  }
  return (
    <>
      
      <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand " href="/"><i class="fa-solid fa-bowl-food"></i> <strong>ZWIGGY aaaaa</strong></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
            <div className="input-group">
              <span className="border-warning input-group-text bg-warning text-white"><i className="fa-solid fa-magnifying-glass"></i></span>
              <input type="text" className="form-control border-warning" style={{ color: '#7a7a7a' }} />
              <button className="btn btn-warning text-white">Search</button>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="ms-auto d-none d-lg-block">
              <div className="input-group">
                <span className="border-warning input-group-text bg-warning text-white"><i className="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" className="form-control border-warning" style={{ color: '#7a7a7a' }} />
                <button className="btn btn-warning text-white">Search</button>
              </div>
            </div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase active" aria-current="page" href="/">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#Menu">MENU</a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link mx-2 text-uppercase" href="#footer">CONTACT-US</a>
              </li>
             
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to='/cart' className="nav-link mx-2 text-uppercase" href="/cart"><i class="fa-solid fa-cart-shopping"></i> Cart</Link>
              </li>
              <li className="nav-item">

              {!token?<button onClick={() =>setLogin(true)} className='n1'><i className="fa-solid fa-circle-user me-1"></i> SIGN IN </button>
              :<div className='navbar-profile'>
                <img src={assets.profile_icon}/>
                <ul className='navbar-profile-dropdown'>
            <li><img src={assets.bag_icon}/><p>Orders</p></li>
            <hr />
           <li onClick={logout}><img src={assets.logout_icon}/><p>Logout</p></li> 
                </ul>
                </div>}
              
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
