import React, { Component } from 'react';
import StarIcon from '../../public/assests/StarIcon.svg';

export default class Stars extends Component {
  constructor(props) {
    super(props)
    this.state = {


    }
  }

  render () {
    const stars = this.props.stars
    const handleClick = this.props.onClick

    return (
      <div className='rating-group'>
        <div onClick={handleClick} className='stars-meter'>
          {stars}
        </div>
        <div className='star-text'>
          <div className='disagree'>Strongly Disagree</div>
          <div className='agree'>Strongly Agree</div>
        </div>
      </div>
    )
  }
}
