import React from 'react';
import { ButtonUI } from '../../UI/ButtonUI';


export const Footer = () => {
  return(
    <div className='footer'>
      <hr />
      <ul>
        <li><a href="#"><ButtonUI className = "btn-footer" text_button= "Github" /></a></li>
        <li><a href="#"><ButtonUI className = "btn-footer" text_button= "Twitter" /></a></li>
        <li><a href="#"><ButtonUI className = "btn-footer" text_button= "Linkedin" /></a></li>
      </ul>
      
    </div>
  );
};


      