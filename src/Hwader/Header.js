import React from 'react'
import './Header.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navi=useNavigate()
  useEffect(() => {
    AOS.init({ duration: 2000 });
}, []);
function view(e){
  e.preventDefault()
  navi('/menu1')
}
  return (
    <div className='header' id='Home'>
        <div className='header-contant'>
        <div data-aos="fade-up">
        <h2>Order your favouriate food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.

</p>
             <button onClick={view}>VIEW MENU</button>
        </div>

        </div>
    </div>
  )
}

export default Header