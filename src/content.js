import React from 'react';
import './index.css';

const Content = (props) => {
    return (
        <div className="mainContent">
            <p style={{fontSize: '30px', textAlign: 'left', marginLeft: '50px'}}>{props.title}</p>
            <div className="text-field">{props.paragraph1}</div>
            <div className="text-field">{props.paragraph2}</div>
            <div className="text-field">{props.paragraph3}</div>
            <div className="text-field">{props.paragraph4}</div>
            <div className="text-field">{props.paragraph5}</div>
            <div className="text-field">{props.paragraph6}</div>
        </div>
    );
}

export default Content;