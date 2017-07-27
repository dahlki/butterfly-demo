import React from 'react';
import PropTypes from 'prop-types';

const Question = ({question}) => {
  return (
    <div className="question">{question}</div>
  )
}

Question.propTypes = {
  question: PropTypes.string
}

export default Question;
