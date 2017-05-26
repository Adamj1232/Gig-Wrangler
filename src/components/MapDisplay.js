import React from 'react'
import { venueLocationData, venueCount } from '../helper-functions/venueLocationData'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'


const MapDisplay = withGoogleMap(({ searchResults }) => {
  //needs state so will re render when map coordinates update


  let mapCenter = { lat:40 , lng: -100 }
  if(searchResults.length!==0){
    mapCenter = {lat:searchResults[0].Latitude , lng: searchResults[0].Longitude }};

  const searchLocation = searchResults.filter( venue => {
    const total = searchResults.reduce( (num, eachLocation) => {
      return eachLocation.count > num ? num = eachLocation.count : num
      return num
    }, 0)
    if(venue.count === total){
      return venue
    }
  })

  const venuePins = venueLocationData.map((location, index) => {
    if(location.Latitude){
      let count = venueCount[location.CITY].toString()
      return <Marker
                key={index}
                position={{lat: location.Latitude , lng: location.Longitude}}
                label={count}
              />
    }
  })
    // <InfoWindow
    //    position={this.state.windowPosition}
    //    onCloseclick={this.toggleInfoWindow}
    //    options={{pixelOffset: new google.maps.Size(0,-30)}}
    //    >
    //    content
    //    </InfoWindow>
    console.log(mapCenter)
  return (
    <div id='map-container'>
    <GoogleMap
      defaultZoom={4.2}
      defaultCenter={mapCenter}>
      {venuePins}
    </GoogleMap>
  </div>
  )
})

export default MapDisplay
