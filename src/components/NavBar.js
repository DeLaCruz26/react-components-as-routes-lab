import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    textDecoration: 'none',
    color: 'black',
}

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink exact to='/' style={link} activeStyle={{background: 'lightblue'}}>Home</NavLink>
      <NavLink exact to='/movies' style={link} activeStyle={{background: 'lightblue'}}>Movies</NavLink>
      <NavLink exact to='/directors' style={link} activeStyle={{background: 'lightblue'}}>Directors</NavLink>
      <NavLink exact to='/actors' style={link} activeStyle={{background: 'lightblue'}}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
