import React, { Component } from 'react';
import { VenueCard } from './VenueCard';

export default class VenueGrid extends Component {


  render() {
    const { searchResults, searched } = this.props;
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
