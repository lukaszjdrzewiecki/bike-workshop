import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
import Page from '../../Page/page';
import FrameIcon from '../../../resources/frame.png';



const paragraphs = [
    <div>Sekcja związana z zagadnieniami istniejących na rynku standardów rowerowych, dostępnych części oraz możliwych kompromisów i przyjściówek.</div>,
    <div><h1>Rama <img className="icon" src={FrameIcon} alt="frame"></img></h1>
        <ul>
            <li><a href="/compatibility/headset/1">Stery rowerowe</a></li>
            <li>Suport rowerowy</li>
            <li>Szerokość opony i obręczy</li>
            <li>Mostek rowerowy</li>
        </ul>
    </div>,
]

const Compatibility = () => {
    return (
        <div>
        <Page 
            menu1="serws"
            menu2="serws"
            menu3="serwis"

            title="Wymiary twojego maleństwa"
            paragraphs={paragraphs}

        />
        </div>
    );
}
 
ReactDOM.render(
    <Compatibility/>,
    document.querySelector('#root')
);

export default Compatibility;