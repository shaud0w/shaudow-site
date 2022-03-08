import React from 'react';
import './about.css';
import PFP from '../../assets/pfp.JPG';

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={PFP} alt='Me hehe' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <h5>Developer</h5>
            </article>
            <article className='about__card'>
              <h5>Trader</h5>
            </article>
            <article className='about__card'>
              <h5>Investor</h5>
            </article>
          </div>
          <p>Description about Shaudow</p>
          <a href='#contact' className='btn btn-primary'>
            Reach out
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
