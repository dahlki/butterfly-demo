import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import SelectMood from '../components/SelectMood';
import Oops from '../components/PageNotFound';
import data from '../../api/data';

export default class SelectMoodContainer extends Component {
  constructor() {
    super()
    this.state = {
      active: null,
      activeMessage: ''
    }
  }

  componentDidMount() {
    const level = this.props.match.params.level;
    const activeMood = data.getSelectMood(level);
    const Mood = activeMood[level];
    this.setState({active: <Mood key={level}/>, activeMessage: activeMood.message})
  }

  render () {
    const key = this.state.active ? this.state.active.key : null
    return (
      this.state.active ?
      <SelectMood mood={this.state} level={key} />
      : (<Route component={Oops} />)
    )
  }
}

