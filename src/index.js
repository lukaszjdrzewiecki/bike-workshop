import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './navbar';
import Logo from './logo';
import Service from './service';
import Compatibility from './compatibility';
import Maintenance from './maintenance';
import About from './about';
import Products from './products';
import Main from './main';


import { BrowserRouter, Route} from "react-router-dom";


 
class App extends React.Component {
    render () {
        return (
        <div>
        <Logo />
        <Navbar />
        <BrowserRouter> 
            <Route path="/service" component={Service}/>  
            <Route path="/service/1" component={Service}/>
            <Route path="/compatibility" component={Compatibility}/>
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
    document.querySelector('#root')
);

export default App;