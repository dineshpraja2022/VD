import React from 'react';
import Login from './Login';
import About from './About';
import Blog from './Blog';
import Contect from './Contect';
import Landing from './LandingPage.js/Landing';
import BlogPost from './LandingPage.js/BlogPost';
import Component1 from './LandingPage.js/Component1';
import HeroSection from './LandingPage.js/HeroSection';
import TextPhoto from './LandingPage.js/TextPhoto';
import BoxText from './LandingPage.js/BoxText';
import Testimonials from './LandingPage.js/Testimonials';
import OurService from './LandingPage.js/OurService';
import Footer from './LandingPage.js/Footer';
import Nav from './LandingPage.js/Nav';
import NavSocial from './LandingPage.js/NavSocial'
import Registration from './Registration';
import {  Routes, Route } from "react-router-dom";
function App() {
  return (
   <>
   
   <div className='bg-[#fff]'>
          <Routes>
            <Route path='/' element={ <Landing/>}>   </Route>
            <Route path="Login" element={<Login />} />
            <Route path="Registration" element={<Registration />} />





            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Contect" element={<Contect />} />
           

            
          </Routes>
        
      </div>
 
   </>
  );
}

export default App;
