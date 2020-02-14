import React from 'react';

import { Link } from "react-router-dom";

import '../index.css';


const NavbarButton = (props) => {
    return (
        <Link to={props.adress}>{props.buttonName}</Link>
    );
}

export default NavbarButton;
