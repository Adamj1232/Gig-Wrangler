import React from 'react'
import { venueLocationData, venueCount } from '../helper-functions/venueLocationData';
import { locationDataState } from '../complete-data/location-data-state'

describe('venueLocationData Cleaner funtionality', () => {
  it('should return all venues that have a corresponding Lat, Long with data from locationDataState array which is geolocated', () => {

    expect(venueLocationData.length).toEqual(3297)
    expect(venueLocationData[0].Latitude).toEqual(locationDataState[0].Latitude)
    expect(venueLocationData[2].Latitude).toEqual(locationDataState[2].Latitude)
  })

  it('should return all venues that that are in the same city in the cityVenues array within the object', () => {

    expect(venueLocationData[2].cityVenues).toEqual(['Rock-A-Billies', '12 Volt Tavern', 'Jake\'s Roadhouse', 'Odyssey Beerwerks' ])
    expect(venueLocationData[2].CITY).toEqual('Arvada')


    expect(venueLocationData[3].cityVenues).toEqual(['Rock-A-Billies', '12 Volt Tavern', 'Jake\'s Roadhouse', 'Odyssey Beerwerks' ])
    expect(venueLocationData[3].CITY).toEqual('Arvada')


    expect(venueLocationData[4].cityVenues).toEqual(['Rock-A-Billies', '12 Volt Tavern', 'Jake\'s Roadhouse', 'Odyssey Beerwerks' ])
    expect(venueLocationData[4].CITY).toEqual('Arvada')


    expect(venueLocationData[5].cityVenues).toEqual(['Rock-A-Billies', '12 Volt Tavern', 'Jake\'s Roadhouse', 'Odyssey Beerwerks' ])
    expect(venueLocationData[5].CITY).toEqual('Arvada')

  })

})


describe('venueCounta Cleaner funtionality', () => {
  it('should return an array of states as key and cities from that state as the value', () => {
    const keys = Object.keys(venueCount)
    const cityKeys = Object.keys(venueCount[keys[0]])

    expect(keys.length).toEqual(49)
    expect(typeof(venueCount[keys[0]])).toEqual('object')
    expect(cityKeys[3]).toEqual('Aspen')
    expect(venueCount[keys[0]][cityKeys[3]].count).toEqual(9)

  })

})
