import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import becomeBetter from './components/become-better'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // rotateAngle: 0,
    }
  }

  render() {
    becomeBetter()
    return (
      <div></div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.fluid-container'))
