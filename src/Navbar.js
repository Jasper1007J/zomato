import React, { useState } from 'react';

const Navbar = () => {
  const [MainAddress,setMainAddress] = useState('Krishnapuram Colony');
  const [Address,setAddress] = useState('1-234, ABC, TEKBA, Andhra Pradesh');
  
  return (
    <nav>
      <div className="navbar">
        {/* Logo */}
        <div className='group-1'>
        <div className="logo">
          <img src={require('./images/location.png')} alt=''/>
        </div>
        <div className='nav-home-name'>
            <div className='nav-home'>
            <div>{MainAddress}</div>
            <div className='nav-home-img'><img src={require('./images/arrow.png')} alt='arrow'/></div>
            </div>
            <div className='nav-address'>
              <label>{Address}</label>
            </div>
        </div>
        </div>
        <div className='nav-account'>
          J
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
