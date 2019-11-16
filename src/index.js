import React from 'react';
import ReactDOM from 'react-dom';
import './Component/index.css';
import Navbar from './Component/Page/navbar';
import Logo from './Component/Page/logo';
import Service from './Component/Content/Service/service';
import Compatibility from './Component/Content/Compatibility/compatibility';
import Maintenance from './Component/Content/Maintenance/maintenance';
import About from './Component/Content/About/about';
import Products from './Component/Content/Products/products';
import Main from './Component/Content/main';
import Headset from './Component/Content/Service/headset';
import HeadsetType from './Component/Content/Compatibility/headsetType';
import TyreToRim from './Component/Content/Compatibility/tyres';
import BottomBracketArticle from './Component/Content/Compatibility/bottomBracket';
import CassetteArticle from './Component/Content/Compatibility/cassette';



import { BrowserRouter, Route} from "react-router-dom";



 
class App extends React.Component {
    render () {
        return (
        <div>
        <Logo />
        <Navbar />
        <BrowserRouter basename="https://lukaszjdrzewiecki.github.io/bike-workshop/">
            <Route exact path="/service" component={Service}/>
            <Route path="/service/headset/1" exact component={Headset}/>
            <Route path="/compatibility/frame/headset" exact component={HeadsetType}/>
            <Route path="/compatibility/frame/bottom-bracket" exact component={BottomBracketArticle}/>
            <Route path="/compatibility/wheel/tyre-to-rim" exact component={TyreToRim}/>
            <Route path="/compatibility/drivetrain/cassette" exact component={CassetteArticle}/>
            <Route path="/compatibility" exact component={Compatibility}/>
            <Route path="/maintenance" component={Maintenance}/>  
            <Route path="/about" component={About}/>  
            <Route path="/products" component={Products}/>
            <Route path="/" exact component={Main}/>
        </BrowserRouter>
        </div>
        );
    }
}
 
ReactDOM.render(

    <App/>, 
    document.querySelector('#root'),
    //document.getElementById('App)
    
);

export default App;