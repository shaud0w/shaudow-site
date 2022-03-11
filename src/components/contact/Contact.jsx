import React from 'react';
import './contact.css';
import {BsTwitter} from 'react-icons/bs';
import {FaDiscord} from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <a href='https://twitter.com/shaud0w'>
              <BsTwitter />
              <h4>DM on Twitter</h4>
            </a>
          </article>
          <article className='contact__option'>
            <a href='https://discord.gg/UqTMmhanFk'>
              <FaDiscord />
              <h4>Join my Discord</h4>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
