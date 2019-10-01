import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './page';

 
const Compatibility = () => {
    return (
        <div>
        <Page 
            menu1="serws"
            menu2="serws"
            menu3="serwis"

            title="Jak wycentrować koło"
            paragraph1="blablalba"
            paragraph2="fdsfsdadsgsdgsdg"
            paragraph3="dgsgsd"
        />
        </div>
    );
}
 
ReactDOM.render(
    <Compatibility/>,
    document.querySelector('#root')
);

export default Compatibility;