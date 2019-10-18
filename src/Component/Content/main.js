import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Page from '../Page/page';


const paragraphs = ['aaa', 'bbb', 'ccc']

const Main = () => {
    return (
        <div>
        <Page 
            menu1="serws"
            menu2="serws"
            menu3="serwis"

            title="Siema pedalarzu!"
            paragraphs={paragraphs}

        />
        </div>
    );
}
 
ReactDOM.render(
    <Main/>,
    document.querySelector('#root')
);

export default Main;