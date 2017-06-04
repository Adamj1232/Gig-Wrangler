import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { searchByState } from '../search-functions/searchCleaner'
import VenueGridContainer from '../containers/VenueGridContainer'
import MapContainer from '../containers/MapContainer'



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      state: '',
      searchResults: [],
      searched: false,
      searchedCity: '',
      searchedState: '',
      venuesPerCity: 0
    }
  }

  typeHandler(e, stateType){
    if(stateType === 'venuesPerCity'){
      this.setState({
        [stateType]: e
      })
    } else {
      this.setState({
        [stateType]: e.target.value
      })
    }
  }

  capsFirstLetter(string) {
    return string.replace(/\w\S*/g, (txt) => {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }


  searchVenues(e, state, city){
    e.preventDefault()
    this.setState({
      state: '',
      city: '',
      searched: true,
      searchedState: state,
      searchedCity: this.capsFirstLetter(city),
      searchResults: searchByState(state, city)
    })
  }

  searchVenuesByMap(state, city){
    this.setState({
      searchResults: searchByState(state, city),
      searched: true,
      searchedCity: city
    })
  }

  render() {
    return (
      <section>
        <h1>GigWrangler</h1>
        <form>
          <input
            type='text'
            value={this.state.city}
            placeholder='please enter a city'
            onChange={(e) => {
              this.typeHandler(e, 'city')}}
          />
          Select a state:
          <select value={this.state.state} id='selectedState' onChange={(e) => { this.typeHandler(e, 'state')}}>
            <option value=""></option>
            <option value="AL">Alabama</option>
          	<option value="AK">Alaska</option>
          	<option value="AZ">Arizona</option>
          	<option value="AR">Arkansas</option>
          	<option value="CA">California</option>
          	<option value="CO">Colorado</option>
          	<option value="CT">Connecticut</option>
          	<option value="DE">Delaware</option>
          	<option value="DC">District of Columbia</option>
          	<option value="FL">Florida</option>
          	<option value="GA">Georgia</option>
          	<option value="HI">Hawaii</option>
          	<option value="ID">Idaho</option>
          	<option value="IL">Illinois</option>
          	<option value="IN">Indiana</option>
          	<option value="IA">Iowa</option>
          	<option value="KS">Kansas</option>
          	<option value="KY">Kentucky</option>
          	<option value="LA">Louisiana</option>
          	<option value="ME">Maine</option>
          	<option value="MD">Maryland</option>
          	<option value="MA">Massachusetts</option>
          	<option value="MI">Michigan</option>
          	<option value="MN">Minnesota</option>
          	<option value="MS">Mississippi</option>
          	<option value="MO">Missouri</option>
          	<option value="MT">Montana</option>
          	<option value="NE">Nebraska</option>
          	<option value="NV">Nevada</option>
          	<option value="NH">New Hampshire</option>
          	<option value="NJ">New Jersey</option>
          	<option value="NM">New Mexico</option>
          	<option value="NY">New York</option>
          	<option value="NC">North Carolina</option>
          	<option value="ND">North Dakota</option>
          	<option value="OH">Ohio</option>
          	<option value="OK">Oklahoma</option>
          	<option value="OR">Oregon</option>
          	<option value="PA">Pennsylvania</option>
          	<option value="RI">Rhode Island</option>
          	<option value="SC">South Carolina</option>
          	<option value="SD">South Dakota</option>
          	<option value="TN">Tennessee</option>
          	<option value="TX">Texas</option>
          	<option value="UT">Utah</option>
          	<option value="VT">Vermont</option>
          	<option value="VA">Virginia</option>
          	<option value="WA">Washington</option>
          	<option value="WV">West Virginia</option>
          	<option value="WI">Wisconsin</option>
          	<option value="WY">Wyoming</option>
          </select>
          <button onClick={(e)=> this.searchVenues(e, this.state.state, this.state.city)}> Submit </button>
        </form>
        <MapContainer
          mapElement={ <div className='mapElement' /> }
          containerElement={ <div className='containerElement'/> }
          venues={this.props.venueReducer}
          searchResults={this.state.searchResults}
          venuesPerCity={this.state.venuesPerCity}
          searchFromMap={this.searchVenuesByMap.bind(this)}
          mapPinFilter={this.typeHandler.bind(this)}
        />
        <VenueGridContainer
          searchedState={this.state.searchedState}
          searchedCity={this.state.searchedCity}
          venues={this.props.venueReducer}
          searchResults={this.state.searchResults}
          searched={this.state.searched}
        />
      </section>
    )
  }
}


App.propTypes = {
  venueReducer: PropTypes.array
}
