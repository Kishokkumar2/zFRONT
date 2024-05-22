import React, { useState, useEffect } from 'react';
import './Menu.css';
import { menu_list } from '../assets/assets';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Menu = ({ category, setCategory }) => {


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleCategoryClick = (itemName) => {
    setCategory(prev => prev === itemName ? "All" : itemName);
  };



  return (
    <div className='menu' id="Menu">
      <h1>Explore our menu</h1>
      <p> Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className='menu1'>
        {menu_list.map((item, index) => (
          <div key={index} data-aos="fade-left" className='menu2' onClick={() => handleCategoryClick(item.menu_name)}>
            <img  className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
            <h5>{item.menu_name}</h5>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
