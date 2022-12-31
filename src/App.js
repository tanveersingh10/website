import './App.css';
import Main from './Components/MainComponent';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import React, { Component } from 'react';
import Banner from './Components/BannerComponent';
import About from './Components/AboutComponent';
import Testimonials from './Components/TestimonialsComponent';
import { TESTIMONIALS } from './shared/testimonials';
import Navigation from './Components/NavigationComponent';
import Skills from './Components/SkillsComponent';
import Contact from './Components/ContactComponent';



function App() {
  return (
    <>
      <Banner/>
      <div id="body">
        <Navigation />
        <About />
        <Skills />
        <Testimonials testimonials = {TESTIMONIALS} /> 
        <Contact />
      </div>
    </>
   
  );
}

export default App;
