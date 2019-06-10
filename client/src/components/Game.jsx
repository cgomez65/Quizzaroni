import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import questions from '../../../database/data'
import End from '../components/End'


class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      data: questions,
      isAnswered: false,
      score: 0 ,
      question: 1,
    }
    console.log(this.state.data.questions)
     this.handleAnswer = this.handleAnswer.bind(this)
     this.nextQuestion = this.nextQuestion.bind(this)
  }

  handleEnd(){

  }

  nextQuestion(e){
    let index = this.state.index
    let incorrect = 0;
    let element = document.getElementsByClassName('choice-container')

    if(this.state.isAnswered){
      
      this.setState({
        index: index===20?0:index+1,
        score: this.state.score+10,
        question: this.state.question+1
      })
    } else {
      incorrect++
    }
    this.setState({
      isAnswered: false
    })
  }


  // togglePopup() {
  //   this.handleAnswer(e)
  //   this.setState({
  //     showPopup: !this.state.showPopup
  //   });
  // }

  handleAnswer(e) {
    let element = e.currentTarget;
    let index = this.state.index
    let answer = this.state.data.questions[index].answer
    const correctAnswer = Number(element.dataset.id)
    let wrong = 0
    
    if(answer === correctAnswer){
      element.parentElement.classList.add('correct');
      this.setState({
        isAnswered: true
      })
      setTimeout(() => {
        element.parentElement.classList.remove('correct')
      }, 2000);

    } else {
      
      element.parentElement.classList.add('incorrect')
        // alert('Wrong')   
        wrong++  
    }
    
    
    setTimeout(() => {
      element.parentElement.classList.remove('incorrect')
    }, 2000);
    
  }
  
 
  render(){
    return (
      <div id = 'answers' className='container'>
      

       
        <div id='game' className='justify-center flex-column'>
          <div id='hud'>
            <div id='hud-item'>
              <p className="hud-prefix">
                question
              </p>
              <h1 className='hud-main-text' id="questionCounter">
                { this.state.question}/20
              </h1>
            </div>
            <div id="hud-item">
              <p className="hud-prefix">
                score
              </p>
              
              <h1 class="hud-main-text">
                { this.state.score }
              </h1>
            </div>
          </div>
          <h2 id = 'question' >{ this.state.data.questions[this.state.index].question }</h2>
          <div  className='choice-container'>
            <p className='choice-prefix' data-id = '1' onClick={ this.handleAnswer }>A</p>
            <p id='choices' className='choice-text' >{ this.state.data.questions[this.state.index].choice1 }</p>
          </div>
          <div  className='choice-container'>
            <p className='choice-prefix' data-id = '2' onClick={ this.handleAnswer }>B</p>
            <p id='choices' className='choice-text' >{ this.state.data.questions[this.state.index].choice2 }</p>
          </div>
          <div  className='choice-container'>
            <p className='choice-prefix' data-id = '3' onClick={ this.handleAnswer }>C</p>
            <p id='choices' className='choice-text' >{ this.state.data.questions[this.state.index].choice3 }</p>
          </div>
          <div  className='choice-container'>
            <p className='choice-prefix' data-id = '4' 
            onClick={ this.handleAnswer }>D</p>
            <p id='choices' className='choice-text' >{ this.state.data.questions[this.state.index].choice4 }</p>
          </div>
          <div >
            <br></br>
            <button className='next-question' class='next-question-prefix' onClick={ this.nextQuestion } >NEXT</button>
            <button className='next-question' class='next-question-prefix' onClick={ this.handleEnd } ><Link to='/end'>FINISH</Link></button>
          </div>
        </div>
      </div>
      
    )
  }
}

export default Game