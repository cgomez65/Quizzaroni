import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import questions from '../../../database/data'
import popup from './Popup'



class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      data: questions,
      isAnswered: false,
      score: 0 ,
      showPopup: false
    }
    console.log(this.state.data.questions)
     this.handleAnswer = this.handleAnswer.bind(this)
     this.nextQuestion = this.nextQuestion.bind(this)
     
  }

  nextQuestion(e){
    let index = this.state.index
    let incorrect=0;
    let element = e.currentTarget;
    element.classList.remove('incorrect');
    if(this.state.isAnswered){
      this.setState({
        index: index===3?0:index+1,
        score: this.state.score+10
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
      element.classList.add('correct');
      this.setState({
        isAnswered: true
      })
      alert('Correct!')

    } else {
        alert('Wrong')   
        wrong++  
        element.classList.add('incorrect');
    }
  }
  
 
  render(){
    return (
      
      <div id = 'answers' className='container'>

        
        <div id='game' className='justify-center flex-column'>
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
            <h2>score: { this.state.score }</h2>
          </div>
        </div>
      </div>
      
    )
  }
}

export default Game