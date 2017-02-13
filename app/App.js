import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import becomeBetter from './components/become-better'
import BoxList from './components/BoxList';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red'
    }
    console.log('****************************************************');
    becomeBetter()
    console.log('****************************************************');
  }

  getChildContext() {
    return { color: this.state.color }
  }

  render() {
    return (
      <div>
        Learn & Move
        <BoxList />
        <button onClick={() => this.setState({color: 'blue'})} style={{color: 'blue'}}>Blue</button>
        <button onClick={() => this.setState({color: 'red'})} style={{color: 'red'}}>Red</button>
      </div>
    )
  }
}

App.childContextTypes = {
  color: React.PropTypes.string
}


ReactDOM.render(<App />, document.querySelector('.fluid-container'))
