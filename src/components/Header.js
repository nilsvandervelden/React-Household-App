import React from 'react';
import  { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Recipes
            </Link>
            <Link to="/shoppingList" className="item">
                Shopping List
            </Link>
            <Link to="/todos" className="item">
                Todo
            </Link>
            <div className="right menu"> 
                <GoogleAuth/>
            </div>
        </div>
    );
};

export default Header