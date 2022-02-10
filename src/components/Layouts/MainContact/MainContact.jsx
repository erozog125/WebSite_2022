import './MainContact.css';

import React from 'react'

export const MainContact = () => {
  return (
    // crear formulario de contacto con React
    <div className='main-contact'>
      <h3>Contacto</h3>
      <form>
        <label>Nombre</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Mensaje</label>
        <textarea></textarea>
        <button>Enviar</button>
      </form>
    </div>
  )
}
