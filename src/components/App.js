import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Scroll from 'react-scroll';

import Logo from '../styles/images/Guitar-Silhouette-Design.png'
import VenueGridContainer from '../containers/VenueGridContainer'
import MapContainer from '../containers/MapContainer'

import { searchByState } from '../search-functions/searchCleaner'
import { stateArray } from '../complete-data/state-array'


export default class App extends Component {
  constructor() {
    super()
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
    stateType === 'venuesPerCity' ?
      this.setState({
        [stateType]: e
      })
    :
      this.setState({
        [stateType]: e.target.value
      })
  }

  scrollAfterSearch() {
    return Scroll.scroller.scrollTo('containerElement', {
      duration: 1000,
      delay: 150,
      smooth: true
    })
  }

  searchVenuesByForm(e, state, city){
    e.preventDefault()
    this.setState({
      state: '',
      city: '',
      searched: true,
      searchedState: state,
      searchedCity: this.capsFirstLetterAllWords(city),
      searchResults: searchByState(state, city)
    })
    this.scrollAfterSearch()
  }

  searchVenuesByMap(state, city){
    this.setState({
      searchResults: searchByState(state, city),
      searched: true,
      searchedCity: city
    })
    this.scrollAfterSearch()
  }

  capsFirstLetterAllWords(string) {
    return string.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  statesArray = Object.keys(stateArray).map( (state, index) => {
    return( <option value={state} key={index}> {stateArray[state]} </option> )
  })

  render() {
    return (
      <section>

        <h1>
          <img src={Logo} alt={"Acoustic Guitar Spiral Logo"} className='Logo'/>
            GigWrangler
          <img src={Logo} alt={"Acoustic Guitar Spiral Logo"} className='Logo'/>
        </h1>

        <form>
          <div className='input-holder'>
            <input
              type='text'
              value={this.state.city}
              placeholder='Enter a City to Search'
              onChange={(e) => {
                this.typeHandler(e, 'city')}}
            />
            <select
              value={this.state.state}
              id='selectedState'
              onChange={(e) => { this.typeHandler(e, 'state')}}
            >
              {this.statesArray}
            </select>
          </div>
          <button
            id='button'
            onClick={(e)=> this.searchVenuesByForm(e, this.state.state, this.state.city)}
          >
            Search
          </button>
        </form>

        <MapContainer
          mapElement={ <div className='mapElement' /> }
          containerElement={ <div className='containerElement' id='containerElement'/> }
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
