import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
import Page from '../../Page/page';
import FrameIcon from '../../../resources/frame.png';
import DriveIcon from '../../../resources/drivetrain.png';
import WheelIcon from '../../../resources/wheel.png';
import ForkIcon from '../../../resources/fork.png';



const paragraphs = [
    <div>Sekcja związana z zagadnieniami istniejących na rynku standardów rowerowych, dostępnych części oraz możliwych kompromisów i przyjściówek.</div>,
    <div><h1>Rama <img className="icon" src={FrameIcon} alt="frame"></img></h1>
        <ul>
            <li><a href="/compatibility/frame/bottom-bracket">Suport</a></li>
            <li><a href="/compatibility/frame/headset">Stery</a></li>
            <li>Szerokość opony i obręczy</li>
            <li>Mostek rowerowy</li>
        </ul>
    </div>,
    <div><h1>Napęd <img className="icon" src={DriveIcon} alt="frame"></img></h1>
    <ul>
        <li><a href="/compatibility/drivetrain/cassette">Kaseta</a></li>
        <li>Kaseta</li>
        <li>Wymiana łańcucha</li>
        <li>Wymiana zębatek korby</li>
    </ul>
</div>,
<div><h1>Amortyzator <img className="icon" src={ForkIcon} alt="frame"></img></h1>
        <ul>
            <li><a href="/service/frame/headset">Czyszczenie</a></li>
            <li>Wymiana uszczelek</li>
            <li>Wymiana oleju</li>
            <li>Serwis miesięczny</li>
        </ul>
    </div>,
    <div><h1>Koła <img className="icon" src={WheelIcon} alt="frame"></img></h1>
    <ul>
        <li><a href="/compatibility/wheel/tyre-to-rim">Stosunek szerokośći opony do obręczy</a></li>
        <li>Zaplatanie</li>
        <li>Centrowanie</li>
        <li>Serwis piast</li>
    </ul>
</div>
]

const Compatibility = () => {
    return (
        <div>
        <Page 
            menu1="serws"
            menu2="serws"
            menu3="serwis"

            title="Kompendium wiedzy o częściach rowerowych"
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