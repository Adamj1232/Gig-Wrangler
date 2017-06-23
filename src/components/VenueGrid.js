import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { VenueCard } from './VenueCard';

export default class VenueGrid extends Component {

  render() {
    const { searchResults, searched, venues, searchedState, searchedCity } = this.props;

    const searchLocation = () => {
      if(searchedCity && searchedState){
        return (`${searchedCity}, ${searchedState}`)
      } else if (searchedState){
        return searchedState
      } else if (searchedCity) {
        return searchedCity
      }
    }

    if(searched === true && searchResults.length === 0){
      return(
        <h2 id='no-results'>No Music Venues Found in {searchedCity}</h2>
      )
    }

    if(searched === false){
      return (
        <section className='results-display'>
          <h3 id='search-results'>{venues.length} Music Venues Found in the USA</h3>
        </section>
      )
    }

    return (
      <section id="venue-grid" name ='venue-grid'>
      <h3 className='results-display'>{searchResults.length} Music Venues Found in {searchLocation(searchedState, searchedCity)}</h3>
        { searchResults.map( (venue, index) => {
          return (
            <VenueCard venueName={venue.NAME}
                       state={venue.State}
                       city={venue.CITY}
                       url={venue.URL}
                       venuePhone={venue.VENUE_PHONE}
                       bookingEmail={venue.BOOKING}
                       bookingContact={venue.CONTACT}
                       PAStatus={venue.PA}
                       venueComments={venue.COMMENTS}
                       key={index}
            />
          )
        })}
      </section>
    )
  }
}


VenueGrid.propTypes = {
  searchResults: PropTypes.array.isRequired,
  venues: PropTypes.array.isRequired,
  searchedState: PropTypes.string.isRequired,
  searchedCity: PropTypes.string.isRequired
}
