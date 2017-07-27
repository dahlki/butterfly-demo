import React from 'react';
import Butterfly from '../../public/assests/Butterfly.svg';
import InfoIcon from '../../public/assests/InfoIcon.svg';
import Data from '../../api/data';


const Sidebar = () => {

  return (
    <div className='sidebar'>
      <a className='sidebar-link' href="https://support.butterfly.ai/" target="_blank">
        <Butterfly className='butterfly-icon'/>
      </a>
      <a className='sidebar-link-info' href="https://support.butterfly.ai/" target="_blank">
        <InfoIcon className='info-icon'/>
      </a>
    </div>
  )

}

export default Sidebar;

