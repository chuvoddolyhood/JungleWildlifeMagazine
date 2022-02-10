import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import Slider from './Slider1';
import About from './About';
import List1 from './List1';
import Title from './Title';
import View from './View';
import Search from './Search';
import { BrowserRouter,Link, Switch,Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
const Home = () => {
    return (
        <div>
            <BrowserRouter>
            
            <Switch>
                <ScrollToTop>
            <Route exact path="/" component={Navbar} />
           
                 <Route path="/view/:id" component={View} />
               

           
                 <Route path="/search" component={Search} />
                 </ScrollToTop>
            </Switch>
           
            </BrowserRouter>
       
        </div>
    )
}

export default Home
