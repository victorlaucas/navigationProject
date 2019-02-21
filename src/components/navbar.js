import React from 'react';
import { NavLink } from 'react-router-dom';

export default function() {
  return(
    <div className="nav-links">
      <NavLink exact to='/'>Home</NavLink>
      <NavLink to="/about" >About</NavLink>
      <NavLink to="/contact" >Contact</NavLink>
      <NavLink to="/counter" >Counter</NavLink>
    </div>
  );
}