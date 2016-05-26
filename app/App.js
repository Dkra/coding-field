import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import style from './components/style.sass'
import AddButton from './components/add_button'
import RemoveButton from './components/remove_button'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      counter: 0,
      digitColor: 'red',
      rotateAngle: 0,
    }
  }

  componentDidMount() {
    setInterval(() => {
      let color = this.state.counter%2 ? 'color-1' : 'color-2'
      let rotateAngle = this.state.rotateAngle + 6

      this.setState({
        counter: this.state.counter + 1,
        digitColor: color,
        rotateAngle: rotateAngle
      })
    },1000)
  }

  increase(e) {
    const d = this.state.counter + this.state.step
    let color = this.state.counter%2 ? 'color-1' : 'color-2'
    this.setState({
      counter: d,
      digitColor: color,
    })
  }

  decrease() {
    const d = this.state.counter - this.state.step
    let color = this.state.counter%2 ? 'color-1' : 'color-2'
    this.setState({
      counter: d,
      digitColor: color,
    })
  }

  h1s() {
    let arr = []
    let i = 1;
    while( i > 0 ) {
      let h1 = <h1 className={`txt-${this.state.digitColor}`}
                   key={i}
                   style={{transform: `rotate(${this.state.rotateAngle}deg)`}} >{this.state.counter}</h1>
      arr.push((() => h1)())
      i--
    }
    return arr
  }


  render() {
    // const h1s = [1,2,3].map(() => {
    //   return <h1 className={`txt-${this.state.digitColor}`} style={{transform: `rotate(${this.state.rotateAngle}deg)`}}>{this.state.counter}</h1>
    // })
    return (
      <div>
        <AddButton increase={() => this.increase() } />
        <RemoveButton decrease={() => this.decrease() } />
        <hr />
        {this.h1s()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.fluid-container'))
