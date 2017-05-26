import { locationData } from '../complete-data/location-data'
import { venueData } from '../complete-data/data-set'

export const venueLocationData = venueData.reduce((combinedArr, venue) => {
    locationData.forEach(location => {
      if(location.City === venue.CITY) {
        venue.Latitude = location.Latitude,
        venue.Longitude = location.Longitude,
        combinedArr.push(venue)
      }
    })
    return combinedArr
  }, [])


export const venueCount = venueData.reduce((cityCountArr, venue) => {
  if(!cityCountArr[venue.CITY]){
    cityCountArr[venue.CITY] = 1
  } else {
    cityCountArr[venue.CITY]++
  }
  return cityCountArr
}, [])
