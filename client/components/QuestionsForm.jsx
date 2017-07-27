import React from 'react';
import { Route, Switch } from 'react-router-dom';
import QuestionContainer from '../containers/QuestionContainer';
import data from '../../api/data';

const QuestionsForm = () => {

    return (
      <div className='question-form'>
        <h1>Do you agree with the following statements:</h1>
        <QuestionContainer />
      </div>
    )

}

export default QuestionsForm;
