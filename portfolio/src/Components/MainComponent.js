import React, { Component } from 'react';
import Banner from './BannerComponent';
import About from './AboutComponent';
import Testimonials from './TestimonialsComponent';
import { TESTIMONIALS } from '../shared/testimonials';
import Navigation from './NavigationComponent';
import {Routes, Route, Navigate} from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <div id="main">
                <Banner />
                <Navigation />
                <About />
                <Testimonials testimonials ={TESTIMONIALS}/>
            </div>
        )
    };
}

export default Main;