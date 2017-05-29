import React from 'react'
import { venueLocationData, venueCount } from '../helper-functions/venueLocationData'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'


const MapDisplay = withGoogleMap(({ searchResults }) => {

  let mapCenter = { lat:40 , lng: -100 }
  let zoomIndex = 4
  if(searchResults.length!==0){
    zoomIndex = 6
    mapCenter = {lat:searchResults[0].Latitude , lng: searchResults[0].Longitude }
  };

  // const searchLocation = searchResults.filter( venue => {
  //   const total = searchResults.reduce( (num, eachLocation) => {
  //     return eachLocation.count > num ? num = eachLocation.count : num
  //     // return num
  //   }, 0)
  //   if(venue.count === total){
  //     return venue
  //   }
  // })

  const venuePins = venueLocationData.map((location, index) => {
    if(location.Latitude){
      let count = venueCount[location.State][location.CITY].toString()
      // console.log(venueCount)
      return <Marker
                key={index}
                position={{lat: location.Latitude , lng: location.Longitude}}
                label={count}
              />
    }
    return null
  })

  // <InfoWindow onCloseClick={()=> clickInfoBox(claim)}>
  //                   <div>
  //                     <div>{sightings[claim].summary}</div>
  //                     <a href={sightings[claim].url} target='_blank'>{'Read More'}</a>
  //                 </div>
  //                 </InfoWindow>

  return (
    <div id='map-container'>
    <GoogleMap
      zoom={zoomIndex}
      center={mapCenter}>
      {venuePins}
    </GoogleMap>
  </div>
  )
})

export default MapDisplay
