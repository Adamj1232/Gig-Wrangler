const venueReducer = (state={}, action) => {
  switch (action.type) {
  case 'RETRIEVED_VENUES':
    return action.venues;
  default:
    return state;
  }
}

export default venueReducer;
