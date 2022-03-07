import React from 'react';
import './header.css';
import CTA from './CTA';
import PFP from '../../assets/pfp.JPG';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hi I&apos;m</h5>
        <h1>Shaudow</h1>
        <h5 className='text-light'>I trade and build...</h5>
        <CTA></CTA>
      </div>
      <HeaderSocials />
      <div className='me'>
        <img src={PFP} alt='Shaudow PFP' />
      </div>

      <a href='#contact' className='scroll__down'>
        Reach out
      </a>
    </header>
  );
};

export default Header;
