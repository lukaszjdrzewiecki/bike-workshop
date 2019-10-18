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


import { BrowserRouter, Route} from "react-router-dom";



 
class App extends React.Component {
    render () {
        return (
        <div>
        <Logo />
        <Navbar />
        <BrowserRouter> 
            <Route path="/service" exact component={Service}/>  
            <Route path="/service/headset/1" exact component={Headset}/>
            <Route path="/compatibility/headset/1" exact component={HeadsetType}/>
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
    
);

export default App;