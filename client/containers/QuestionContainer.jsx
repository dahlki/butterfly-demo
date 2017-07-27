import React, { Component } from 'react';
import { findDOMNode as findNode } from 'react-dom';
import { Redirect } from 'react-router-dom'
import Question from '../components/Question'
import Stars from './Stars'
import AddComment from '../components/Comment'
import Extra from '../components/Extra';
import data from '../../api/data';

export default class QuestionContainer extends Component {
  constructor() {
    super()
    this.state = {
      starMeters: {},
      questions: [],
      Starq1: '',
      Starq2: '',
      Starq3: '',
      Starq4: '',
      Starq5: '',
      q1: '',
      q2: '',
      q3: '',
      q4: '',
      q5: '',
      emptyFields: true,
      extraInput: '',
      formSubmit: false,
      revealCommentFieldq1: false,
      revealCommentFieldq2: false,
      revealCommentFieldq3: false,
      revealCommentFieldq4: false,
      revealCommentFieldq5: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStarClick = this.handleStarClick.bind(this);
    this.handleCommentClick = this.handleCommentClick.bind(this);
  }

  componentDidMount() {
    const questions = data.getQuestions();
    questions.forEach(q => {
      let qNum = Object.keys(q)[0];
      this.state.starMeters[qNum] = data.getStarsMeter(qNum);
    })
    this.setState({questions});
  }

  componentWillUpdate(nextProps, nextState) {
    let emptyField = false;
    for (let i = 1; i <= 5; i++) {
      const field = 'Starq' + i;
      if (!nextState[field]) emptyField = true;
    }
    nextState.emptyFields = emptyField;
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  findElementsAndRemoveClass(c, id) {
    let selected = Object.values(findNode(this).getElementsByClassName(c))
    selected.forEach(el => {
      if (el.id === id) el.className = 'star'
    })
  }

  handleStarClick(e) {
    const questionNum = e.target.name;
    const starRating = e.target.dataset.star;

    this.findElementsAndRemoveClass('selected', e.target.id);
    e.target.className += ' selected';
    this.setState({[e.target.id]: e.target.getAttribute('data-star')}, () => {
      if (starRating < 4) {
      this.setState({[`revealCommentField${questionNum}`] : true});
    } else if (!this.state[`${questionNum}`]) this.setState({[`revealCommentField${questionNum}`] : false});
    });
  }

  handleCommentClick(e) {
    if (!this.state[e.target.name])
    this.setState({[e.target.name]: !this.state[e.target.name]})
  }

  handleSubmit(e) {
    e.preventDefault();

    //put action to persist state values to db

    this.setState({formSubmit: !this.state.formSubmit})
  }

  render () {
    const questions = this.state.questions;
    const extraInput = this.state.extraInput;
    const meters = this.state.starMeters;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {
            questions && questions.map((q, i) => {
              const qN = Object.keys(q)[0];
              const question = Object.values(q)[0];

              return(
                <div className='question-card' key={i}>
                  <Question question={question} />
                  <Stars onClick={this.handleStarClick} stars={meters[qN]} name={`Star${qN}`} />
                  <button onClick={this.handleCommentClick} name={`revealCommentField${qN}`} className='comment-button' type='button'>add a comment</button>
                  {
                    this.state[`revealCommentField${qN}`] ?
                    <AddComment
                      name={`${qN}`}
                      handleChange={this.handleChange}
                      /> : null
                  }
                </div>
              )
            })
          }
          <Extra
            handleChange={this.handleChange}
            extraInput={extraInput}
            />
          {
            this.state.formSubmit ? (
              <Redirect to='/thanks'/>
            ) :
            <button type='submit' disabled={this.state.emptyFields} className='submit-button'>Send</button>
          }
        </form>
      </div>
    )
  }
}
