// var index = require('./components/test.html');

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import style from './components/style.sass'
import AddButton from './components/add_button'
import RemoveButton from './components/remove_button'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 3,
      counter: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      })
    },1000)
  }

  increase() {
    const d = this.state.counter + this.state.step

    console.log(d)

    this.setState({
      counter: d
    })
  }

  decrease() {
    const d = this.state.counter - this.state.step

    this.setState({
      counter: d
    })
  }

  render() {
    return (
      <div>
        <AddButton increase={() => this.increase() } />
        <RemoveButton decrease={() => this.decrease() } />
        <hr />
        <h1>{this.state.counter}</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
