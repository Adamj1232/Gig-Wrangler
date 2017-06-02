import React from 'react';

export const VenueCard = ({ venueName, state, city, url, venuePhone, bookingEmail, bookingContact, PAStatus, venueComments}) => {
  const venueComment = (info, title) => {
    if(title === 'Booking Email'){
      console.log('email');
      return (<a href={`mailto:${info}?Subject=Booking%20At%20${venueName}`} target="_top">E-Mail: {venueName}</a>)
    } else if(info){
      return (<h5>{title}: {info}</h5>)
  }}

  return (
    <article  className="venue-card">
      <h3>{venueName}</h3>
      <h4>{city}, {state}</h4>
      <a
        target="_blank"
        href={url}
        className='website'
        rel="noopener noreferrer"
      >{url}</a>
      {venueComment(bookingContact, 'Booking Contact')}
      {venueComment(bookingEmail, 'Booking Email')}
      {venueComment(venuePhone, 'Venue Phone')}
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
