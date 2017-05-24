export const retrieveVenues = (venues) => {
  return {
    type: 'RETRIEVED_VENUES',
    venues
  };
};
