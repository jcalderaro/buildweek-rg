import React from 'react';
import { Route, Link } from 'react-router-dom';

const Navbar = props => {
  return (
    <div className=''>
      <Link to='/'><button className='headerBtn'>Add A New Contact</button></Link>
      <Link to='/smurfs'><button className='headerBtn'>See Your Contact List</button></Link>
    </div>
  );
};

export default Navbar;