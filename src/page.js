import React from 'react';
import './index.css';
import SideMenu from './sideMenu';
import Content from './content';

const Page = (props) => {
    return (
        <div className="page">
            <SideMenu 
            menu1 = {props.menu1}
            menu2 = {props.menu2}
            menu3 = {props.menu3}
            />
            <Content 
            title = {props.title}
            paragraph1 = {props.paragraph1}
            paragraph2 = {props.paragraph2}
            paragraph3 = {props.paragraph3}
            paragraph4 = {props.paragraph4}
            paragraph5 = {props.paragraph5}
            paragraph6 = {props.paragraph6}
            />
        </div>
    );
}

export default Page;