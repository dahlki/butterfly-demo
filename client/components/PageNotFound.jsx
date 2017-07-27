import React from  'react';
import { Link } from 'react-router-dom';

const Oops = () => {
  return (
    <div className='thank-you-page'>
      <div className='thank-you'>OOPS YOUR PAGE WAS NOT FOUND!</div>
      <div className='thank-you-message'>
        <Link to='/'>how was your week?</Link>
      </div>
    </div>
  )
}

export default Oops;