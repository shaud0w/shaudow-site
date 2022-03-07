import React from 'react';
import {BsTwitter, BsGithub} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://github.com/shaud0w'>
        <BsGithub />
      </a>
      <a href='https://twitter.com/shaud0w'>
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
