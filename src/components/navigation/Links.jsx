import React from 'react';

const Links = ({navBarLinks, onChange}) => {
    return (
<div className='links'>
    {navBarLinks.map((link)=>
    <div className={link.complited? 'linkActive' : ''}
    key={link.id}
    onClick={()=>onChange(link.id)}
    >
    | {link.title} |
    </div>
    )}
</div>
    );
}
 
export default Links;