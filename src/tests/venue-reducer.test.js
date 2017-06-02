import reducer from '../reducers/venue-reducer';

describe('Venue reducer tests', () => {
 it('should return the initial state, an empty array', () => {

   expect(reducer(undefined, [])).toEqual([])
 })

 it('Should return all the movies from the database when action type is RETRIEVED_VENUES', () => {
   const action = {
     type: 'RETRIEVED_VENUES',
     venues : [{
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
   }

   const expected = [{
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


   expect(reducer(undefined, action)).toEqual(expected)
   expect(reducer(undefined, action).length).toEqual(2)
 })

 it('Should return all the movies from the database when action type is RETRIEVED_VENUES', () => {
   const action = {
     type: 'RETRIEVED_VENUES',
     venues : [{
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
   }

   const expected = [{
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


   expect(reducer(undefined, action)).toEqual(expected)
   expect(reducer(undefined, action).length).toEqual(10)
 })
})
