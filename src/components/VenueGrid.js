import React, { Component } from 'react';
import { VenueCard } from './VenueCard';

export default class VenueGrid extends Component {


  render() {
    const { searchResults, searched, venues } = this.props;
    if(searched === true && searchResults.length === 0){
      return(
        <div>No music venues found in selected location</div>
      )
    }

    if(searched === false){
      return (
        <section>
          <h3>{venues.length} music venues found in the USA</h3>
          <h3>Enter a location to search or click a marker on the map</h3>
        </section>
      )
    }

    return (
      <section id="venue-grid">
      <h3>{searchResults.length} music venues found in...</h3>
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
