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
      score: 0,
      showPopup: false
    }
    console.log(this.state.data.questions)
     this.handleAnswer = this.handleAnswer.bind(this)
     this.togglePopup = this.togglePopup.bind(this)
  }


  togglePopup() {
    this.handleAnswer(e)
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handleAnswer(e) {
    let { isAnswered } = this.props
    let element = e.currentTarget;
    let index = this.state.index
    let answer = this.state.data.questions[index].answer
    const correctAnswer = Number(element.dataset.id)
    let wrong = 0

    if(answer === correctAnswer){
      this.setState({
        isAnswered: true,
        index: index===2?0:index+1
      })

      console.log(this.state.index+"index")
      alert('Correct!')

    } else {
        alert('Wrong')   
        wrong++  
    }
  }
  
 
  render(){
    return (
      
      <div id = 'answers' className='container'>

        {this.state.showPopup ? 
          <Popup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
        <div id='game' className='justify-center flex-column'>
          <h2 id = 'question' >{ this.state.data.questions[this.state.index].question }</h2>
          <div  className='choice-container'>
            <p className='choice-prefix' data-id = '1' style= {{backgroundColor: '#28a745'}} onClick={ this.handleAnswer }>A</p>
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
            <p className='choice-prefix' data-id = '4' onClick={ this.handleAnswer }>D</p>
            <p id='choices' className='choice-text' >{ this.state.data.questions[this.state.index].choice4 }</p>
          </div>
        </div>
      </div>
      
    )
  }
}

export default Game