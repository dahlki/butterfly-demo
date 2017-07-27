import React, { Component } from 'react';
import AllMoods from '../components/AllMoods';
import data from '../../api/data';


export default class AllMoodsContainer extends Component {
  constructor() {
    super();
    this.state = {
      moods: [],
      active: null,
    }
  }

  componentDidMount() {
    //normally axios call to db for moods and selected mood

    //get select mood:
    const level = this.props.match.params.level;
    const activeMood = data.getSelectMood(level);
    const active = activeMood[level];
    //get moods and create components:
    const moods = data.getMoods();
    this.setState({moods, active})
  }

  render () {
    const active = this.state.active
    const level = this.state.level
    return (
      <div className='mood-container'>
        <div className='mood-select-title'>Did you make a mistake? Please select your current mood:</div>
        <div className='moods-all'>
          {
            this.state.moods.map((mood, i) => {
              return active && (mood.type.name === active.name)
              ? <AllMoods mood={mood} active={true} key={i}/>
              : <AllMoods mood={mood} key={i} /> })
          }
        </div>
      </div>
    )
  }
}
