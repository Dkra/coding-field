import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'
import style from '../app.sass'

class WeatherList extends Component {

  // componentWillMount() {
  //   console.log('will mount');
  // }
  //
  // componentDidMount() {
  //   console.log('did mount');
  // }
  //
  // componentWillUnmount() {
  //   console.log('before component umount');
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('-----------shouldComponentUpdate------------');
  //   console.log('nextProps:', nextProps);
  //   console.log('nextState:', nextState);
  //   return true
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   console.log('-----------componentWillReceiveProps------------');
  //   console.log('nextProps:', nextProps);
  // }
  //
  // componentWillUpdate(nextProps, nextState) {
  //   console.log('-----------componentWillUpdate------------');
  //   console.log('nextProps:', nextProps);
  //   console.log('nextState:', nextState);
  // }
  //
  // componentDidUpdate(prevProps, prevState) {
  //   console.log('-----------componentDidUpdate------------');
  //   console.log('nextProps:', nextProps);
  //   console.log('nextState:', nextState);
  // }

  renderWeather(data, index) {
    const tempatures = data.list.map(( weather ) => weather.main.temp - 273)
    const pressure = data.list.map(( weather ) => weather.main.pressure )
    const humidity = data.list.map(( weather ) => weather.main.humidity )
    const { lat, lon } = data.city.coord

    return (
      <tr key={data.city.name}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td><Chart data={tempatures} width={100} height={50} color="red" unit="c"/></td>
        <td><Chart data={pressure} width={100} height={50} color="red" unit="hPa"/></td>
        <td><Chart data={humidity} width={100} height={50} color="red" unit="%"/></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Tempature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
