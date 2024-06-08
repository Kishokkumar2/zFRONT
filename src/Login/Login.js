import React, { useState, useEffect, useContext } from 'react';
import './Login.css';
import axios from 'axios';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StoreContext } from '../Menu/CONTEXT/StoreContext';

const Login = ({ setLogin }) => {
    const {  setToken } = useContext(StoreContext);
    const navigate = useNavigate();
    const [currState, setCurrState] = useState("Login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function register(e) {
        e.preventDefault();

        if (password.length < 8) {
            toast.error("Password must be at least 8 characters long");
        } else {
            axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, { name, email, password })
                .then(res => {
                    if (res.data === "exist") {
                        toast.error("User already exists");
                    } else if (res.data === "not exist") {
                        toast.success("User registered successfully");
                        setCurrState("Login")
                    }
                })
                .catch(error => {
                    console.error("There was an error!", error);
                });
        }
    }

    async function log(e) {
        e.preventDefault();

        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/Login`, { email, password })
                .then(res => {
                    if (res.data.success) {
                        toast.success("Login successful");
                        setLogin(false);
                        setToken(res.data.token)
                        localStorage.setItem("token",res.data.token)
                       
                    } else if (res.data === 'incorrect password') {
                        toast.error("Incorrect password");
                    } else if (res.data === 'not exist') {
                        toast.error("User not found");
                    }
                })
                .catch(error => {
                    console.error("There was an error!", error);
                });
        } catch (error) {
            console.error("There was an error!", error);
        }
    }

    return (
        <div className="Login1" id="footer">
            <form className="Login2">
                <div className='Login3'>
                    <h2>{currState}</h2>
                    <img onClick={() => setLogin(false)} src={assets.cross_icon} alt="close" />
                </div>
                <div className='Login4'>
                    {currState === "Login" ? (
                        <>
                            <input 
                                type="email" 
                                placeholder='Your Email' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                            <input 
                                type="password" 
                                placeholder='Password' 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                            <button onClick={log}>Login</button>
                        </>
                    ) : (
                        <>
                            <input 
                                type="text" 
                                placeholder='Your Name' 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                            <input 
                                type="email" 
                                placeholder='Your Email' 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                            <input 
                                type="password" 
                                placeholder='Password' 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                            <button onClick={register}>Sign up</button>
                        </>
                    )}
                </div>
                {currState === "Login" ? (
                    <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click Here</span></p>
                ) : (
                    <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login Here</span></p>
                )}
            </form>
        </div>
    );
};

export default Login;
