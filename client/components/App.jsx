import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import Sidebar from './Sidebar';
import AllMoodsContainer from '../containers/AllMoodsContainer';
import SelectMoodContainer from '../containers/SelectMoodContainer';
import QuestionsForm from './QuestionsForm';
import Mood from './Mood';
import Footer from './Footer';
import Thanks from './ThankYou';

const App = () => {
  return (

    <div>
      <Sidebar />

      <div className='main'>
      <Route path='/' render={(props) => {
          return props.location.pathname !== '/thanks' ?
          (
            <div>
              <div className='mood'>
                <Mood />
                <QuestionsForm />
              </div>
            </div>
          )
          : (<Route exact path='/thanks' component={Thanks} />)
        }
      } />

        <Footer />
      </div>

    </div>

  )
}

export default App;



