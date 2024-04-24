import React from 'react'
import BlogPost from './BlogPost';
import Component1 from './Component1';
import HeroSection from './HeroSection';
import TextPhoto from './TextPhoto';
import BoxText from './BoxText';
import Testimonials from './Testimonials';
import OurService from './OurService';
import Footer from './Footer';
import Nav from './Nav';
import NavSocial from './NavSocial'
import { Suscribe } from './Suscribe';

export default function Landing() {
  return (
    <div>
        <NavSocial/>
        <Nav/>
      <HeroSection/>
    
   <BoxText/>
   <Component1/>
   {/* <Alr/> */}
   {/* <Alr2/> */}
   <BlogPost/>
   <Testimonials/>
   <OurService/>
   <Suscribe/>
   <Footer/>
   <TextPhoto/>
    </div>
  )
}
