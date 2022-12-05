import React from 'react';
import NavBar from './NavBar';


const Header = ({navBarLinks, onChange}) => {
    return (
        <div className='header'>
            <NavBar  
            navBarLinks = {navBarLinks}
            onChange = {onChange}
            />
        </div>
        
    );
}
 
export default Header;