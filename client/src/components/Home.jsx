import React, { Component } from 'react';
import Buttons from './Buttons'


class Home extends Component{
  render(){
    return(
      <div className="container">
        <div id="home" className="flex-center flex-column">
          <h1>Quick Quiz!</h1>
          <Buttons />
        </div>
      </div>
    )
  }
}


export default Home