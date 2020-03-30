import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
  const style = {
    display: 'inline-block',
    margin: 10,
    marginBottom: 30
  };

  return (
    <div className='header'>
      <div className='links'>
        <h3 style={style}><Link className='home' to='/'>Home</Link></h3>
        <h3 style={style}><Link className='youtube' to='/Youtube'>Youtube</Link></h3>
        <h3 style={style}><Link className='music-master' to='/music-master'>Music Master</Link></h3>
      </div>
      {children}
    </div>
  )
}

export default Header;
