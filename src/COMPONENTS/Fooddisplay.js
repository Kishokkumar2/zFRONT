import React, { useContext, useEffect } from 'react';
import './Fooddisplay.css';
import { StoreContext } from '../Menu/CONTEXT/StoreContext';
import Fooditem from './Fooditem';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Fooddisplay = ({ category }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const { food_list } = useContext(StoreContext);
    const{cartitem}=useContext(StoreContext)
    console.log("kisf",cartitem)
    return (
        <div className='food-display'>
            <h2>Top dishes near you</h2>
            <div className="container mt-5">
                <div className="row">
                    {food_list.map((item, index) => (
                        (category === "All" || category === item.category) ? (
                            <div key={index} className="col-lg-4 col-md-6 col-sm-12 pizzacard" data-aos="fade-up">
                                <div className='m-3 rounded p-3'>
                                    <div className='d-flex justify-content-center align-items-center' data-aos="zoom-in">
                                        <div className=' m3 rounded'> 
                                            <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Fooddisplay;
