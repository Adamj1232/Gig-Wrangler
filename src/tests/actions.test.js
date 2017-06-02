import * as actions from '../actions/index';

describe('Testing retrieved venues actions', () => {

  it('should create an action to retrieve venues', () => {
    const venues = [{
        "State": "SC",
        "CITY": "Hilton Head Island",
        "NAME": "The Boardroom",
        "URL": "https://www.facebook.com/TheBoardroomHHI",
        "BOOKING": "https://www.facebook.com/TheBoardroomH",
        "VENUE_PHONE": "",
        "CAP": "",
        "CONTACT": "",
        "PA": "",
        "POSTERS": "",
        "BOOK #": "",
        "COMMENTS": "",
        "PRESS": ""
      },
      {
          "State": "SC",
          "CITY": "Hilton Head Island",
          "NAME": "The Boardroom2",
          "URL": "https://www.facebook.com/TheBoardroomHHI",
          "BOOKING": "https://www.facebook.com/TheBoardroomH",
          "VENUE_PHONE": "",
          "CAP": "",
          "CONTACT": "",
          "PA": "",
          "POSTERS": "",
          "BOOK #": "",
          "COMMENTS": "",
          "PRESS": ""
        }]

    const expectedAction = {
      type: 'RETRIEVED_VENUES',
      venues
    }

    expect(actions.retrieveVenues(venues)).toEqual(expectedAction)
  })

  it('should create an action to retrieve venues with a larger data set', () => {
    const venues = [{
        "State": "SC",
        "CITY": "Hilton Head Island",
        "NAME": "The Boardroom",
        "URL": "https://www.facebook.com/TheBoardroomHHI",
        "BOOKING": "https://www.facebook.com/TheBoardroomH",
        "VENUE_PHONE": "",
        "CAP": "",
        "CONTACT": "",
        "PA": "",
        "POSTERS": "",
        "BOOK #": "",
        "COMMENTS": "",
        "PRESS": ""
      },
      {
        "State": "SC",
        "CITY": "Hilton Head Island",
        "NAME": "The Boardroom2",
        "URL": "https://www.facebook.com/TheBoardroomHHI",
        "BOOKING": "https://www.facebook.com/TheBoardroomH",
        "VENUE_PHONE": "",
        "CAP": "",
        "CONTACT": "",
        "PA": "",
        "POSTERS": "",
        "BOOK #": "",
        "COMMENTS": "",
        "PRESS": ""
        },
        {
        "State": "SC",
        "CITY": "Hilton Head Island",
        "NAME": "The Boardroom3",
        "URL": "https://www.facebook.com/TheBoardroomHHI",
        "BOOKING": "https://www.facebook.com/TheBoardroomH",
        "VENUE_PHONE": "",
        "CAP": "",
        "CONTACT": "",
        "PA": "",
        "POSTERS": "",
        "BOOK #": "",
        "COMMENTS": "",
        "PRESS": ""
          },
          {
        "State": "SC",
        "CITY": "Hilton Head Island",
        "NAME": "The Boardroom4",
        "URL": "https://www.facebook.com/TheBoardroomHHI",
        "BOOKING": "https://www.facebook.com/TheBoardroomH",
        "VENUE_PHONE": "",
        "CAP": "",
        "CONTACT": "",
        "PA": "",
        "POSTERS": "",
        "BOOK #": "",
        "COMMENTS": "",
        "PRESS": ""
            },
            {
        "State": "SC",
        "CITY": "Hilton Head Island",
        "NAME": "The Boardroom5",
        "URL": "https://www.facebook.com/TheBoardroomHHI",
        "BOOKING": "https://www.facebook.com/TheBoardroomH",
        "VENUE_PHONE": "",
        "CAP": "",
        "CONTACT": "",
        "PA": "",
        "POSTERS": "",
        "BOOK #": "",
        "COMMENTS": "",
        "PRESS": ""
              },
              {
        "State": "SC",
        "CITY": "Hilton Head Island",
        "NAME": "The Boardroom6",
        "URL": "https://www.facebook.com/TheBoardroomHHI",
        "BOOKING": "https://www.facebook.com/TheBoardroomH",
        "VENUE_PHONE": "",
        "CAP": "",
        "CONTACT": "",
        "PA": "",
        "POSTERS": "",
        "BOOK #": "",
        "COMMENTS": "",
        "PRESS": ""
        },
        {
        "State": "SC",
        "CITY": "Hilton Head Island",
        "NAME": "The Boardroom7",
        "URL": "https://www.facebook.com/TheBoardroomHHI",
        "BOOKING": "https://www.facebook.com/TheBoardroomH",
        "VENUE_PHONE": "",
        "CAP": "",
        "CONTACT": "",
        "PA": "",
        "POSTERS": "",
        "BOOK #": "",
        "COMMENTS": "",
        "PRESS": ""
        },
        {
        "State": "SC",
        "CITY": "Hilton Head Island",
        "NAME": "The Boardroom8",
        "URL": "https://www.facebook.com/TheBoardroomHHI",
        "BOOKING": "https://www.facebook.com/TheBoardroomH",
        "VENUE_PHONE": "",
        "CAP": "",
        "CONTACT": "",
        "PA": "",
        "POSTERS": "",
        "BOOK #": "",
        "COMMENTS": "",
        "PRESS": ""
      },
      {
        "State": "SC",
        "CITY": "Hilton Head Island",
        "NAME": "The Boardroom9",
        "URL": "https://www.facebook.com/TheBoardroomHHI",
        "BOOKING": "https://www.facebook.com/TheBoardroomH",
        "VENUE_PHONE": "",
        "CAP": "",
        "CONTACT": "",
        "PA": "",
        "POSTERS": "",
        "BOOK #": "",
        "COMMENTS": "",
        "PRESS": ""
        },
        {
        "State": "SC",
        "CITY": "Hilton Head Island",
        "NAME": "The Boardroom10",
        "URL": "https://www.facebook.com/TheBoardroomHHI",
        "BOOKING": "https://www.facebook.com/TheBoardroomH",
        "VENUE_PHONE": "",
        "CAP": "",
        "CONTACT": "",
        "PA": "",
        "POSTERS": "",
        "BOOK #": "",
        "COMMENTS": "",
        "PRESS": ""
          }]

    const expectedAction = {
      type: 'RETRIEVED_VENUES',
      venues
    }

    expect(actions.retrieveVenues(venues)).toEqual(expectedAction)
  })


})
