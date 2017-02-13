import React, { Component, PropTypes } from 'react';

class BoxItem extends Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('this.props', this.props)
    console.log('nextProps', nextProps)
    console.log('this.context', this.context)
  }

  render() {
    return (
      <div >
        BoxItem {this.context.color}
      </div>
    )
  }
}

export default BoxItem;

BoxItem.contextTypes = {
  color: React.PropTypes.string
}

BoxItem.propTypes = {

};
