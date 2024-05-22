import React from 'react';
import './Footer.css';
import { assets } from '../assets/assets';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    
    return (
        <main>
            <div data-aos="fade-up" id="footer">

            <div className="foot1" >
                <div className="foot2 row">
                    <div className="col-6 col-md-4">
                        <h3>ZWIGGY</h3>
                        <p>
                            ZWIGGY is an Indian multinational restaurant aggregator and food delivery company. 
                        </p>
                    </div>
                    <div className="col-6 col-md-4">
                        <h2>Learn More</h2>
                        <ul className='ul'>
                        <li >  <a  href="#Home">HOME</a></li>
                            <li>About us</li>
                            <li>Privacy</li>
                            <li>Terms</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-4">
                        <h2>Social Media</h2>
                        <div className='img'>
                            <img src={assets.facebook_icon} style={{ marginRight: '10px' }} />
                            <img src={assets.twitter_icon} />
                        </div>
                    </div>
                </div>
                <div className='foot6'>
                    <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
                </div>
            </div>
            </div>
        </main>
    );
}

export default Footer;
