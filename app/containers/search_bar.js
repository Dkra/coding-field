import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, createStore, applyMiddleware } from 'redux'
import { fetchWeather } from '../actions/index'
import reducers from '../reducers'
import ReduxPromise from 'redux-promise'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: 'taipei'}
    this._form = null
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(evt) {
    console.log(evt.target.value)
    this.setState({term: evt.target.value})
  }

  componentWillMount() {
    // after connect with mapDispatchToProps can just use
    this.props.fetchWeather('maioli');
  }


  onFormSubmit(evt) {
    evt.preventDefault()

    // fetch weather data
    this.props.fetchWeather(this.state.term)

    this.setState({term: ''})
  }

  render() {
    return (
      <form className="input-form" onSubmit={ this.onFormSubmit } ref={ (ref) => this._form = ref }>
        <input type="text"
          placeholder="get five day forecast in your citys!"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  console.log('just before return bindActionCreators');
  return bindActionCreators({ fetchWeather }, dispatch)
}


export default connect(null, mapDispatchToProps)(SearchBar)
