import React from 'react';

import { MainContact } from '../../Layouts/MainContact/MainContact';
import { Header } from '../../Layouts/Header/Header';
import { Footer } from '../../Layouts/Footer/Footer';

export const Contact = () => {
  return(
    <div className='contact'>
      <Header />
      <MainContact />
      <Footer />      
    </div>    
    ) 
};