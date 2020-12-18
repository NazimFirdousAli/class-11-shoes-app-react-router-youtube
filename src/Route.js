import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Home.js';
import Product from './Components/Products.js';
import Navbar from './Components/Navbar.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
function RouterConfig(){
    return(
        <div>
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/product" element={<Product/>}/>
                </Routes>
            </Router>
        </div>
    )

}
export default RouterConfig;