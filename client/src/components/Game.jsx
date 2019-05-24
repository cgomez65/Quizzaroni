import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

const question = document.getElementById("question");
const choices = Array.from(document.getElementById("choice-text"))

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions




class Game extends Component {
  render(){
    return (
      <div className='container'>
        <div id='game' className='justify-center flex-column'>
          <h2 id='question'>What is the answer to this questions?</h2>
          <div className='choice-container'>
            <p class='choice-prefix'>A</p>
            <p class='choice-text' data-number='1'>Choice 1</p>
          </div>
          <div className='choice-container'>
            <p class='choice-prefix'>B</p>
            <p class='choice-text' data-number='2'>Choice 2</p>
          </div>
          <div className='choice-container'>
            <p class='choice-prefix'>C</p>
            <p class='choice-text' data-number='3'>Choice 3</p>
          </div>
          <div className='choice-container'>
            <p class='choice-prefix'>D</p>
            <p class='choice-text' data-number='4'>Choice 4</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Game