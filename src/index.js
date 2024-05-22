import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StoreContextProvider from './Menu/CONTEXT/StoreContext';
import {BrowserRouter} from "react-router-dom"
import Footer from './home/Foter'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>

 
 <StoreContextProvider>  <App /> <Footer /></StoreContextProvider></BrowserRouter>
   
   

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

