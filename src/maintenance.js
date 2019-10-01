import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './page';

 
const Maintenance = () => {
    return (
        <div>
        <Page 
            menu1="serws"
            menu2="serws"
            menu3="serwis"

            title="Sekcja o serwisowaniu"
            paragraph1="blablalba"
            paragraph2="Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
            est laborum."
            paragraph3="Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
            sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
            est laborum."
        />
        </div>
    );
}
 
ReactDOM.render(
    <Maintenance/>,
    document.querySelector('#root')
);

export default Maintenance;