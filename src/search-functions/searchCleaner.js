import { venueData } from '../complete-data/data-set';

const searchByCity = (selectedCity, venues) => {
 let searchCity = venues.filter( venue => {
   const lowerCaseVenuesCity = venue.CITY.toLowerCase()
  if(lowerCaseVenuesCity === selectedCity){
    return venue
  }
})
return searchCity
};

export const searchByState = (selectedState, selectedCity) => {
  const lowerCaseSelectedCity = selectedCity.toLowerCase()
  const lowerCaseSelectedState = selectedState.toLowerCase()

  let search = venueData.filter( venue => {
  const lowerCaseVenuesState = venue.State.toLowerCase()
  if(lowerCaseSelectedState === ''){
    return venue
  } else if (lowerCaseSelectedState === lowerCaseVenuesState){
    return venue
  }
})
return lowerCaseSelectedCity === '' ? search : searchByCity(lowerCaseSelectedCity, search)
};


export const venueSearch = ( state ) => {
  return venueData.filter( venue => {
    if(venue.State === state ){
      return venue
    }
  })
}
