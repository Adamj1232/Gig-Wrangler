import React from 'react';

export const VenueCard = ({ venueName, state, city, url, venuePhone, bookingEmail, bookingContact, PAStatus, venueComments}) => {

  function validateEmail(email) {
    const validate = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validate.test(email);
  }

  const venueComment = (info, title, classTitle) => {
    if(title === 'Booking Email' && validateEmail(info)){
      return (
        <div className={classTitle}>
          <h5>{info}</h5>
          <a href={`mailto:${info}?Subject=Booking%20At%20${venueName}`} target="_top"
          >Send Email to {venueName}</a>
        </div>
      )
    } else if(info && title !== 'Booking Email'){
      return (<h5 className={classTitle}>{title}: {info}</h5>)
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
      {venueComment(bookingContact, 'Booking Contact', 'booking-contact')}
      {venueComment(bookingEmail, 'Booking Email', 'booking-email')}
      {venueComment(venuePhone, 'Venue Phone', 'venue-phone')}
      {venueComment(PAStatus, 'PA', 'pa-status')}
      {venueComment(venueComments, 'Venue Comments', 'venue-comments')}
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
