import { locationData } from '../complete-data/location-data'
import { venueData } from '../complete-data/data-set'

export const venueLocationData = venueData.reduce((combinedArr, venue) => {
  venue.cityVenues = []
  venueData.forEach(venueLocation => {
    if(venueLocation.CITY === venue.CITY){
      venue.cityVenues.push(venueLocation.NAME)
    }
  })
    locationData.forEach(location => {
      if(location.City === venue.CITY) {
        venue.Latitude = location.Latitude
        venue.Longitude = location.Longitude
        combinedArr.push(venue)
      }
    })
  return combinedArr
}, [])


export const venueCount = venueData.reduce((cityCountArr, venue) => {
  if(!cityCountArr[venue.State]){
    cityCountArr[venue.State] = {[venue.CITY]:1}
  } else if (!cityCountArr[venue.State][venue.CITY]){
    cityCountArr[venue.State][venue.CITY]=1
  } else {
    cityCountArr[venue.State][venue.CITY]++
  }
  return cityCountArr
}, [])
