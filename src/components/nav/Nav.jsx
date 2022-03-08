import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {BiMessageSquareDetail} from 'react-icons/bi';

const Nav = () => {
  return (
    <nav>
      <a href='#'>
        <AiOutlineHome />
      </a>
      <a href='#contact'>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
