import React from 'react';
import '../index.css';


const NavbarButton = (props) => {
    return (
            <a href={props.adress}>{props.buttonName}</a>
    );
}

export default NavbarButton;