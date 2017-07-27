import React from 'react';
import Github from '../../public/assests/github.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-butterfly'>Butterfly.</div>
      <a href="https://support.butterfly.ai/" target="blank">Support | </a>
      <a href="https://www.butterfly.ai/legal.html#euala" target="blank">Terms of Service | </a>
      <a href="https://www.butterfly.ai/legal.html#privacy-policy" target="blank">Privacy Policy</a>
      <span><a className='email' href="mailto:silviasonn@gmail.com">silvia sonn</a></span>
      <a href="https://github.com/dahlki" target="blank"><Github className="github-icon"/></a>
    </div>
  )
}

export default Footer