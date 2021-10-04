import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css'

const Header = () => {
    return (
        <div className="banner">
          
            <Navigation></Navigation>
    
            <div className="text-white find">
            <h1>Find Private Tutor</h1>
            <button className="rounded-pill btn btn-primary">Find Tutor</button>
            </div>
      
            
        </div>
    );
};

export default Header;