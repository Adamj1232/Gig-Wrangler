import React from 'react'
import PropTypes from 'prop-types';
import { venueCount } from '../helper-functions/venueLocationData'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'


const MapDisplay = withGoogleMap(({ searchResults, searchFromMap, mapPinFilter, venuesPerCity }) => {

  let mapCenter = { lat: 40 , lng: -97 }
  let zoomIndex = 4
  var buttonTitle5 = 'Cities with 5+ Venues'
  var buttonTitle10 = 'Cities with 10+ Venues'

  if(venuesPerCity === 0){
    buttonTitle5 = 'Cities with 5+ Venues'
    buttonTitle10 = 'Cities with 10+ Venues'
  } else if (venuesPerCity === 5){
    buttonTitle5 = 'All Cities with Venues'
    buttonTitle10 = 'Cities with 10+ Venues'
  } else {
    buttonTitle5 = 'Cities with 5+ Venues'
    buttonTitle10 = 'All Cities with Venues'
  }

  if( searchResults.length !== 0){
    const sortedSearch = searchResults.sort( (venueA, venueB) => {
      return venueB.cityVenues.length - venueA.cityVenues.length
    })
    zoomIndex = 8
    mapCenter = {lat:sortedSearch[0].Latitude , lng: sortedSearch[0].Longitude }
  };

  const mapDisplayClick = (filterAmount, e) => {
    mapPinFilter(
      venuesPerCity !== filterAmount ?  filterAmount :  0, 'venuesPerCity'
    )
  }

  const venuePins = Object.keys(venueCount).map((location, index) => {
    const pin = Object.keys(venueCount[location]).map((city, i) => {
      let cityInfo = venueCount[location][city]
      let Latitude = cityInfo.lat
      let Longitude = cityInfo.long
      if(Latitude !== '' && Longitude !== '' && typeof(Latitude) === 'number' && typeof(Longitude) === 'number' && venuesPerCity < cityInfo.count){
        return <Marker
                  key={i}
                  position={{lat: Latitude , lng: Longitude}}
                  label={cityInfo.count.toString()}
                  onClick={() => searchFromMap(location, city)}
                />
      } else {
        return null
      }
    })
    return pin
  })


  return (
    <div id='map-container'>
      <button onClick={(e) => mapDisplayClick(5, e)}>{buttonTitle5}</button>
      <button onClick={(e) => mapDisplayClick(10, e)}>{buttonTitle10}</button>
      <GoogleMap
        zoom={zoomIndex}
        center={mapCenter}>
        {venuePins}
      </GoogleMap>
    </div>
  )
})

export default MapDisplay

MapDisplay.PropTypes = {
  searchResults: PropTypes.array.isRequired,
  searchFromMap: PropTypes.func,
  mapPinFilter: PropTypes.func.isRequired,
  venuesPerCity: PropTypes.number.isRequired
}
