import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import SelectMoodContainer from '../containers/SelectMoodContainer';

const AllMoods = ({mood, active}) => {
  const moodClass = 'mood-button' + (active ? '-active' : '')

  return (
    <Link to={`/v/${mood.key}`}>
      <button className={moodClass} >
        {mood}
      </button>
    </Link>
  )
}

AllMoods.propTypes = {
  mood: PropTypes.object,
  active: PropTypes.bool
}

export default AllMoods;
