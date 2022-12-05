import React from 'react';
import Links from './Links';

const NavBar = ({navBarLinks, onChange}) => {
    return (
        <div className='navbar'>
            <Links 
            navBarLinks = {navBarLinks}
            onChange={onChange}
            />
        </div>
    );
}
 
export default NavBar;