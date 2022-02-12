import React from 'react';
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='header'>
      <nav>
        <NavLink to='/'><ButtonUI className = "btn-ui" text_button = "Home" /></NavLink>
        <NavLink to='/aboutUs'><ButtonUI className = "btn-ui" text_button = "About Us" /></NavLink>
        <NavLink to='/contact'><ButtonUI className = "btn-ui" text_button = "Contact" /></NavLink>       
      </nav>
      <hr />
    </header>
  );
};
