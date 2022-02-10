import React from 'react';
import { ButtonUI } from '../../UI/ButtonUI';
import { NavLink } from 'react-router-dom';


export const Footer = () => {
  return(
    <div className='footer'>
      <hr />
      <ul>
      <NavLink to='/users'><ButtonUI className = "btn-ui" text_button = "Users" /></NavLink>       
        <li><a href="#"><ButtonUI className = "btn-footer" text_button= "Github" /></a></li>
        <li><a href="#"><ButtonUI className = "btn-footer" text_button= "Twitter" /></a></li>
        <li><a href="#"><ButtonUI className = "btn-footer" text_button= "Linkedin" /></a></li>
      </ul>
      
    </div>
  );
};


      