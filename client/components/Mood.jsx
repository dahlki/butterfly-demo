import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AllMoodsContainer from '../containers/AllMoodsContainer';
import SelectMoodContainer from '../containers/SelectMoodContainer';
import Oops from './PageNotFound';

const Mood = () => {
  return (
    <div className='mood'>
      <Switch>
        <Route exact path='/' component={AllMoodsContainer} />
        <Route exact path='/v/:level' component={SelectMoodContainer} />
        <Route exact path='/v/:level/moods' component={AllMoodsContainer}/>
        <Route component={Oops} />
      </Switch>
    </div>
  )
}
export default Mood;
