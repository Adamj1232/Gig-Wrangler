import React from 'react';
// import PropTypes from 'prop-types';
// import './MovieCard.css';


export const VenueCard = ({ venueName, state, city, url, venuePhone, bookingEmail, bookingContact, PAStatus, venueComments}) => {
  const venueComment = (note, title) => {
    if(note){
    return (<h5>{title}: {note}</h5>)
  }}

  return (
    <article  className="venue-card">
      <h3>{venueName}</h3>
      <h4>{city}, {state}</h4>
      <h5>{url}</h5>
      {venueComment(bookingContact, 'Booking Contact')}
      {venueComment(bookingEmail, 'Booking Email')}
      <h5>{venuePhone}</h5>
      {venueComment(PAStatus, 'PA')}
      {venueComment(venueComments, 'Venue Comments')}
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
