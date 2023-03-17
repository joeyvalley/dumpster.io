import React from 'react';
import logo from '../../../src/assets/icon.png'

function Header() {
    return (
    <div className="navbar">
        <img src={logo} alt='logo' className='navbar-logo' /> 
        <div className='search-bar'>
        <div className='profile-container'></div>
        </div>
    </div>
   );
}

export default Header;