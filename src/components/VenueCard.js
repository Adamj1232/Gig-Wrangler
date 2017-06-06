import React from 'react';
import PropTypes from 'prop-types';

export const VenueCard = ({ venueName, state, city, url, venuePhone, bookingEmail, bookingContact, PAStatus, venueComments}) => {

  const validateEmail = (email) => {
    const validate = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validate.test(email);
  };

  const isUrlValid = (Url) => {
    const results = Url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g);
    if(results == null){
      return false;
    } else {
      return true;
    }
  };


  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  const venueComment = (info, title, classTitle) => {
    if( title === 'Booking Email' && validateEmail(info)){
      return (
        <div className={classTitle}>
          <h5>{info}</h5>
          <a href={`mailto:${info}?Subject=Booking%20At%20${venueName}`}
          target="_top"
          className='emailer'
          >Send Email to {venueName}</a>
        </div>
      );
    } else if (classTitle === 'website'){
      return  info !== '' && isUrlValid(info) === true
        ?
        <a
          target="_blank"
          href={url}
          className={classTitle}
          rel="noopener noreferrer"
        >{url}</a>
        :
        <a
          target='_blank'
          rel="noopener noreferrer"
          className={classTitle}
          href={`http://www.google.com/search?q=${venueName}+${city}+${state}`}
        >Search Results For This Venue</a>

    } else if (info && title !== 'Booking Email'){
      return classTitle==='pa-status' ?
      (
        <h5 className={classTitle}>{title}: {capitalizeFirstLetter(info)}</h5>
      ) :
      (
        <h5 className={classTitle}>{title}: {info}</h5>
      )
    };
  };


  return (
    <article  className="venue-card">
      <div>
        <h3>{venueName}</h3>
        <h4>{city}, {state}</h4>
      </div>
      <div>
        {venueComment(venueComments, 'Notes', 'venue-comments')}
        {venueComment(PAStatus, 'On-Site Sound System', 'pa-status')}
      </div>
        {venueComment(bookingContact, 'Booking Contact', 'booking-contact')}
        {venueComment(bookingEmail, 'Booking Email', 'booking-email')}
      <div>
        {venueComment(venuePhone, 'Venue Phone', 'venue-phone')}
        {venueComment(url, null, 'website')}
      </div>
    </article>
  );
};

VenueCard.propTypes = {
  venueName: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  venuePhone: PropTypes.string.isRequired,
  bookingEmail: PropTypes.string.isRequired,
  bookingContact: PropTypes.string.isRequired,
  PAStatus: PropTypes.string.isRequired,
  venueComments: PropTypes.string.isRequired
};
