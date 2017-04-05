import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import "regenerator-runtime/runtime"

import becomeBetter from './components/become-better'

export default class App extends Component {
  constructor(props) {
    super(props)
    console.log('****************************************************');
    becomeBetter()
    console.log('****************************************************');
  }

  render() {
    return (
      <div>
        Learn & Move
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.fluid-container'))
