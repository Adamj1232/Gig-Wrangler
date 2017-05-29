import { locationData } from '../complete-data/location-data'
import { venueData } from '../complete-data/data-set'

export const venueLocationData = venueData.reduce((combinedArr, venue) => {
  venueData.forEach(venueLocation => {
    if(venueLocation.CITY === venue.CITY){
      venue.cityVenues= []
      if(venue.cityVenues.includes(venueLocation.NAME)) {
        venue.cityVenues.push(venueLocation.NAME)
      }
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
  console.log(venue.State);
  if(!cityCountArr[venue.CITY]){
    cityCountArr[venue.CITY] = 1
  } else {
    cityCountArr[venue.CITY]++
  }
  return cityCountArr
}, [])


venueData.reduce((combinedArr, venue) => {
  //combine this with venueLocationData...includes city venue list
    venueData.forEach(venueLocation => {
      if(venueLocation.CITY === venue.CITY){
        if(!venue.cityVenues) {
          venue.cityVenues= []
        }
        venue.cityVenues.push(venueLocation.NAME)
      }
    })
    locationData.forEach(location => {
      if(location.City === venue.CITY) {
        venue.count = venueCount[venue.CITY]
        venue.Latitude = location.Latitude
        venue.Longitude = location.Longitude
        combinedArr.push(venue)
      }
    })
  return combinedArr
}, [])
