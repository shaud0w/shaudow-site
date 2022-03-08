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

        <HeaderSocials />
        <div className='me'>
          <img src={PFP} alt='Shaudow PFP' />
        </div>
        <CTA></CTA>
      </div>
    </header>
  );
};

export default Header;
