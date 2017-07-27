import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import EditIcon from '../../public/assests/EditIcon.svg';

const SelectMood = ({mood, level}) => {

  return (
    (level < 6 && level > 0) ? (
      <div className='select-mood'>
        <Link to={`/v/${level}/moods`}>
          <div className='select-mood-smile'>
            {mood.active}
          </div>
          <div>
            <EditIcon />
          </div>
        </Link>
        <div className='select-mood-title'>
          <h4 className='select-mood-title-message'>{mood.activeMessage}</h4>
          <div className='select-mood-title-note'>Your answers will <strong>always remain anonymous</strong></div>
        </div>
      </div>)
      : (<Redirect to='/' />)
    )
  }

SelectMood.propTypes = {
  mood: PropTypes.object,
  level: PropTypes.string
}

  export default SelectMood;
