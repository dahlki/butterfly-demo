import React from 'react';
import VeryHappy from '../public/assests/VeryHappy.svg';
import Happy from '../public/assests/Happy.svg';
import Neutral from '../public/assests/Neutral.svg';
import Unhappy from '../public/assests/Unhappy.svg';
import VeryUnhappy from '../public/assests/VeryUnhappy.svg';
import StarIcon from '../public/assests/StarIcon.svg';

const Data = {
  questions: [
    {"q1": 'I like my work environment, and I believe it helps me perform at my best.'},
    {"q2": 'I feel like I have a healthy work/life balance.'},
    {"q3": 'I feel comfortable working and interacting with the colleagues on my team.'},
    {"q4": 'I am satisfied with my roles and responsibilities.'},
    {"q5": 'My direct manager gives me necessary support and clear objectives.'}
  ],
  moods: [
    {"5": VeryHappy, 'message': 'Awesome! Thank you for your Feedback.'},
    {"4": Happy, 'message': 'Great! Thank you for your Feedback.'},
    {"3": Neutral, 'message': 'OK… things could be better. Thank you for your Feedback.'},
    {"2": Unhappy, 'message': 'Mmmmh, things should improve. Thank you for your Feedback.'},
    {"1": VeryUnhappy, 'message': 'Oops, something needs to change. Thank you for your Feedback.'}
  ],
  //get questions in random order:
  getQuestions: () => {
    return shuffle(Data.questions);
  },
  //create all moods svg react elements array:
  getMoods: () => {
    return Data.moods.map(mood => {
      const level = Object.keys(mood)[0]
      const Mood = Object.values(mood)[0];
      return <Mood className='mood' key={level} />
    })
  },
  //get a selected mood by mood level:
  getSelectMood: (level) => {
    // const moodObj = Data.moods.find(mood => Object.keys(mood)[0] === level);
    // const SelectMood =  level && level < 6 ? moodObj[level] : null;
    if (level && level < 6) {
      const moodObj = Data.moods.find(mood => Object.keys(mood)[0] === level);
      return moodObj;
    } else return {};
  },
  //create a star meter from 1 to 5:
  getStarsMeter: (questionNum) => {
    let meter = [];
    for (let rating = 5; rating > 0; rating--) {
      let starSpan = <a id={`Star${questionNum}`} name={questionNum} className='star' data-star={rating} key={rating}>
        <StarIcon className='star-icon' />
      </a>
      meter.push(starSpan);
    }
    return meter;
  }
}

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex ;
  // while remaining elements
  while (0 !== currentIndex) {
    // pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

export default Data;
