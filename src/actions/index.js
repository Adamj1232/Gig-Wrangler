export const retrieveVenues = (venues) => {
  return {
    type: 'RETRIEVED_VENUES',
    venues
  };
};

export const searchedVenues = (venues) => {
  return {
    type: 'SEARCHED_VENUES',
    venues
  };
};
