import React, { useContext, useState } from 'react'
import './Fooditem.css'
import { assets } from '../assets/assets'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { StoreContext } from '../Menu/CONTEXT/StoreContext';


const Fooditem = ({id,name,price,description,image}) => {
    const{cartitem,addtocart,remove,url}=useContext(StoreContext)
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
      console.log("llooo",cartitem)

  return (
    <div data-aos="fade-up">
    <div data-aos="zoom-in">
    <div className='food-item' >  
    <div className='food-item-img-container'  >

        <img className='food-iem-img' src={url+"/Images/"+image} />
        {!cartitem[id]
              ?<img  className='img1' src={assets.add_icon_white} onClick={()=>addtocart(id)} />
              :<div className='food'>
                <img className='img2' onClick={()=>remove(id)}src={assets.remove_icon_red}/>
                <p>{cartitem[id]}</p>
                <img  className='img3' onClick={()=>addtocart(id) }src={assets.add_icon_green}/>
              </div>
        }
    </div>
    <div className='food-item-info'>
        <div className='fod-item-info1'>
            <p className='name'>{name}</p>
            <img  className='star' src={assets.rating_starts}/>

        </div>
        <p className='des'>{description}</p>
        <p className='pri'> PRICE:{price}/-</p>
         
    </div>
    
    
    </div>
    </div>
    </div>
  )
}

export default Fooditem