import React, { Component } from 'react'

export default class RemoveButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button onClick={this.props.decrease}>Remove</button>
    )
  }
}
