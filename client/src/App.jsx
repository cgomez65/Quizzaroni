import React, { Component } from 'react';
// RHL only for front end development
// import { hot } from 'react-hot-loader';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home.jsx'
import Game from './components/Game.jsx'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/game' component={Game} />} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
// hot export works with RHL. Remove line 11 when starting fullstack integration
// export default hot(module)(App);
// Uncomment line 13 & delete line 11 when starting fullstack integration
export default App;
