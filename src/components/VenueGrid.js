import React, { Component } from 'react';
import { VenueCard } from './VenueCard';
import { searchByState } from '../search-functions/searchCleaner'
// import updatedVenues from '../search-functions/searchCleaner'


export default class VenueGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { searchResults, venues, searched } = this.props;
    if(searched === true && searchResults.length === 0){
      return(
        <div>No music venues found in selected location</div>
      )
    }
    return (
      <section id="venue-grid">
        { searchResults.map((venue, index) => {
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
        })
      }
      </section>
    )
  }
}
