import React from 'react';
// import PropTypes from 'prop-types';
// import './MovieCard.css';


export const VenueCard = ({ venueName, state, city, url, venuePhone, bookingEmail, bookingContact, PAStatus, venueComments}) => {


  return (
    <article  className="venue-card">
      <h3>{venueName}</h3>
      <h4>{city}, {state}</h4>
      <h5>{url}</h5>
      <h5>{bookingContact}</h5>
      <h5>{bookingEmail}</h5>
      <h5>{venuePhone}</h5>
      <h5>PA: {PAStatus}</h5>
      <h5>Venue Comments: {venueComments}</h5>
    </article>
  )
}


// MovieCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   poster_path: PropTypes.string.isRequired,
//   overview: PropTypes.string.isRequired,
//   release_date: PropTypes.string.isRequired,
//   vote_average: PropTypes.number.isRequired,
// }
