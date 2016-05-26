import React, { Component } from 'react'

export default class AddButton extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
        <button onClick={()=> this.props.increase()}> Add </button>
    )
  }
}
