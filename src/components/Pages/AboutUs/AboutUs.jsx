import React from 'react';
import { Footer } from '../../Layouts/Footer/Footer';
import { Header } from '../../Layouts/Header/Header';
import img from '../../../assets/pexelsAbout.jpg';



export const AboutUs = () => {
  return(
    <>
     <Header /> 
      <img className="about-us" src={img} alt="Imagen about" />
      <Footer />
    </>    
    ) 
};
