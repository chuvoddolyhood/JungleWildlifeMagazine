import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import Slider from './Slider1';
import About from './About';
import List1 from './List1';
import Title from './Title';
import View from './View';
import Home1 from './Home1';
import { BrowserRouter,Link, Switch,Route } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <BrowserRouter>
            
            <Switch>
            <Route exact path="/" component={Navbar} />
                 <Route path="/view/:id" component={View} />
            </Switch>
           
            </BrowserRouter>
       
        </div>
    )
}

export default Home
