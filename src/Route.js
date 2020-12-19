import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Home.js';
import Product from './Components/Products.js';
import ViewItem from './Components/ViewItem.js';
import Navbar from './Components/Navbar.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function ErrorPage(){
    return(
        <div>
            <h1>Error 404 Page not found</h1>
        </div>
    )
}
function RouterConfig(){
    return(
        <div>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/product" element={<Product/>}/>
                    <Route path="/product/:id" element={<ViewItem/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>
            </Router>
        </div>
    )

}
export default RouterConfig;