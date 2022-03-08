import React from 'react';
import './header.css';
import CTA from './CTA';
import PFP from '../../assets/pfp2.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hi I&apos;m</h5>
        <h1>Shaudow</h1>
        <h5 className='text-light'>I trade and build...</h5>

        <CTA></CTA>

        <HeaderSocials />

        <a href='#contact' className='scroll__down'>
          Reach out
        </a>
        <div className='me'>
          <img src={PFP} alt='Shaudow PFP' />
        </div>
      </div>
    </header>
  );
};

export default Header;
