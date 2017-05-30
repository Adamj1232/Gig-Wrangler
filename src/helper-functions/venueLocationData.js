// import { locationData } from '../complete-data/location-data'
import { locationDataState } from '../complete-data/location-data-state'
import { venueData } from '../complete-data/data-set'

export const venueLocationData = venueData.reduce((combinedArr, venue) => {
  venue.cityVenues = []

  venueData.forEach(venueLocation => {
    if(venueLocation.CITY === venue.CITY && venueLocation.State === venue.State){
      venue.cityVenues.push(venueLocation.NAME)
    }
  })

  locationDataState.forEach(location => {
    if(location.City === venue.CITY && location.State === venue.State) {
      venue.Latitude = location.Latitude
      venue.Longitude = location.Longitude
      combinedArr.push(venue)
    }
  })

  return combinedArr
}, [])


export const venueCount = venueData.reduce((cityCountArr, venue) => {

  if(!cityCountArr[venue.State]){
    cityCountArr[venue.State] = {[venue.CITY]:{count:1, lat:venue.Latitude, long:venue.Longitude}}

  } else if (!cityCountArr[venue.State][venue.CITY]){
    cityCountArr[venue.State][venue.CITY]={count:1, lat:venue.Latitude, long:venue.Longitude}
    
  } else {
    cityCountArr[venue.State][venue.CITY].count++
  }
  return cityCountArr
}, [])
