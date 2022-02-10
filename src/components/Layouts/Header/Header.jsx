import React from 'react';
import { ButtonUI } from '../../UI/ButtonUI';
import { NavLink } from 'react-router-dom';


export const Header = () => {
  return (
    <header>
      <NavLink to='/'><ButtonUI className = "btn-ui" text_button = "Home" /></NavLink>
      <NavLink to='/aboutUs'><ButtonUI className = "btn-ui" text_button = "About Us" /></NavLink>
      <NavLink to='contact'><ButtonUI className = "btn-ui" text_button = "Contact" /></NavLink>       
      <hr />
    </header>
  );
};
