import React from 'react'
import ReactDOM from 'react-dom'
import VenueGrid from '../components/VenueGrid'
import { shallow, mount } from 'enzyme'
import { venueData } from '../complete-data/data-set'
import { COTestData } from './CO-test-data'


describe('VenueGrid instantiation', () => {
  const wrapper = mount(
    <VenueGrid
      searchedState={''}
      searchedCity={''}
      venues={venueData}
      searchResults={[]}
      searched={false}
    />
  )

  it('should receive the expected properties',()=>{
    expect(wrapper.node.props).toEqual(
      { searchedState: '',
        searchedCity: '',
        venues: [...venueData],
        searchResults: [],
        searched: false
      }
    )
  })

  it('should display headers for section with proper information for no search results passed in', () => {

    expect(wrapper.find('h3').length).toBe(2);

    expect(wrapper.find('section').props().className).toEqual('results-display')

    expect(wrapper.find('.results-display').text()).toEqual('3296 Music Venues Found in the USAEnter a City or State to Search or Click a Marker on the Map')
    expect(wrapper.find('#search-results').text()).toEqual('3296 Music Venues Found in the USA')
    expect(wrapper.find('#directions').text()).toEqual('Enter a City or State to Search or Click a Marker on the Map')

  })
})

describe('VenueGrid if searched in a city with no search results', () => {

  const wrapper = mount(
    <VenueGrid
      searchedState={''}
      searchedCity={'Freemont'}
      venues={venueData}
      searchResults={[]}
      searched={true}
    />
  )

  it('should receive the expected properties',()=>{
    expect(wrapper.node.props).toEqual(
      { searchedState: '',
        searchedCity: 'Freemont',
        venues: [...venueData],
        searchResults: [],
        searched: true
      }
    )
  })

  it('should display headers for section with proper information for no search results passed in', () => {

    expect(wrapper.find('h3').length).toBe(1);

    expect(wrapper.find('h3').props().id).toEqual('no-results')

    expect(wrapper.find('#no-results').text()).toEqual(`No music venues found in ${wrapper.node.props.searchedCity}`)

  })

})

describe('VenueGrid with search results passed in', () => {

  const arvadaSearchResults = [
          {
          BOOKING: "jimmy@rockabilliesbar.com",
          CAP: "",
          CITY: "Arvada",
          COMMENTS: "",
          CONTACT: "Jimmy Nigg",
          Latitude: 39.80276,
          Longitude: -105.08748,
          NAME: "Rock-A-Billies",
          PA: "yes",
          POSTERS:"",
          PRESS:"",
          State: "CO",
          URL:"http://www.rockabilliesbar.com",
          VENUE_PHONE:"(303) 421-1799",
          cityVenues:[
          "Rock-A-Billies",
          "12 Volt Tavern",
          "Jake's Roadhouse",
          "Odyssey Beerwerks"]},
          {
          BOOKING: "jimmy@rockabilliesbar.com",
          CAP: "",
          CITY: "Arvada",
          COMMENTS: "",
          CONTACT: "12 Volts Contact",
          Latitude: 39.80276,
          Longitude: -105.08748,
          NAME: "12 Volt Tavern",
          PA: "yes",
          POSTERS:"",
          PRESS:"",
          State: "CO",
          URL:"http://www.12VoltTavern.com",
          VENUE_PHONE:"(303) 421-1799",
          cityVenues:[
          "Rock-A-Billies",
          "12 Volt Tavern",
          "Jake's Roadhouse",
          "Odyssey Beerwerks"]},
          {
          BOOKING: "jimmy@rockabilliesbar.com",
          CAP: "",
          CITY: "Arvada",
          COMMENTS: "",
          CONTACT: "Jake's Contact",
          Latitude: 39.80276,
          Longitude: -105.08748,
          NAME: "Jake's Roadhouse",
          PA: "yes",
          POSTERS:"",
          PRESS:"",
          State: "CO",
          URL:"http://www.JakesRoadhouse.com",
          VENUE_PHONE:"(303) 421-1799",
          cityVenues:[
          "Rock-A-Billies",
          "12 Volt Tavern",
          "Jake's Roadhouse",
          "Odyssey Beerwerks"]},
          {
          BOOKING: "jimmy@rockabilliesbar.com",
          CAP: "",
          CITY: "Arvada",
          COMMENTS: "",
          CONTACT: "Odyssey Beerwerks Contact",
          Latitude: 39.80276,
          Longitude: -105.08748,
          NAME: "Odyssey Beerwerks",
          PA: "yes",
          POSTERS:"",
          PRESS:"",
          State: "CO",
          URL:"http://www.OdysseyBeerwerks.com",
          VENUE_PHONE:"(303) 421-1799",
          cityVenues:[
          "Rock-A-Billies",
          "12 Volt Tavern",
          "Jake's Roadhouse",
          "Odyssey Beerwerks"]}
  ]

  const wrapper = mount(
    <VenueGrid
      searchedState={''}
      searchedCity={'Arvada'}
      venues={venueData}
      searchResults={arvadaSearchResults}
      searched={true}
    />
  )

  it('should receive the expected properties',()=>{

    expect(wrapper.node.props).toEqual(
      { searchedState: '',
        searchedCity: 'Arvada',
        venues: [...venueData],
        searchResults: arvadaSearchResults,
        searched: true
      }
    )
  })

  it('should return the proper amount of venue cards per location searched as well as return a ui result', () => {

    const venueCount = wrapper.node.props.searchResults.length
    const venueLocation = wrapper.node.props.searchedCity

    expect(wrapper.find('section').length).toBe(1);
    expect(wrapper.find('.venue-card').length).toBe(4);

    expect(wrapper.find('.results-display').text()).toEqual(`${venueCount} Music Venues Found in ${venueLocation}`)
  })

  it('should pass the proper info to each Venue card', () => {
    const venueCount = wrapper.node.props.searchResults.length
    const venueLocation = wrapper.node.props.searchedCity

    expect(wrapper.find('section').length).toBe(1);
    expect(wrapper.find('.venue-card').length).toBe(4);

    expect(wrapper.find('.venue-card').first().text()).toBe('Rock-A-BilliesArvada, COOn-Site Sound System: yesBooking Contact: Jimmy Niggjimmy@rockabilliesbar.comSend Email to Rock-A-BilliesVenue Phone: (303) 421-1799http://www.rockabilliesbar.com');

    expect(wrapper.find('.venue-card').last().text()).toBe('Odyssey BeerwerksArvada, COOn-Site Sound System: yesBooking Contact: Odyssey Beerwerks Contactjimmy@rockabilliesbar.comSend Email to Odyssey BeerwerksVenue Phone: (303) 421-1799http://www.OdysseyBeerwerks.com');

  })
})

describe('VenueGrid with search results passed in for city and state', () => {

  const arvadaCOSearchResults = [
          {
          BOOKING: "jimmy@rockabilliesbar.com",
          CAP: "",
          CITY: "Arvada",
          COMMENTS: "",
          CONTACT: "Jimmy Nigg",
          Latitude: 39.80276,
          Longitude: -105.08748,
          NAME: "Rock-A-Billies",
          PA: "yes",
          POSTERS:"",
          PRESS:"",
          State: "CO",
          URL:"http://www.rockabilliesbar.com",
          VENUE_PHONE:"(303) 421-1799",
          cityVenues:[
          "Rock-A-Billies",
          "12 Volt Tavern",
          "Jake's Roadhouse",
          "Odyssey Beerwerks"]},
          {
          BOOKING: "jimmy@rockabilliesbar.com",
          CAP: "",
          CITY: "Arvada",
          COMMENTS: "",
          CONTACT: "12 Volts Contact",
          Latitude: 39.80276,
          Longitude: -105.08748,
          NAME: "12 Volt Tavern",
          PA: "yes",
          POSTERS:"",
          PRESS:"",
          State: "CO",
          URL:"http://www.12VoltTavern.com",
          VENUE_PHONE:"(303) 421-1799",
          cityVenues:[
          "Rock-A-Billies",
          "12 Volt Tavern",
          "Jake's Roadhouse",
          "Odyssey Beerwerks"]},
          {
          BOOKING: "jimmy@rockabilliesbar.com",
          CAP: "",
          CITY: "Arvada",
          COMMENTS: "",
          CONTACT: "Jake's Contact",
          Latitude: 39.80276,
          Longitude: -105.08748,
          NAME: "Jake's Roadhouse",
          PA: "yes",
          POSTERS:"",
          PRESS:"",
          State: "CO",
          URL:"http://www.JakesRoadhouse.com",
          VENUE_PHONE:"(303) 421-1799",
          cityVenues:[
          "Rock-A-Billies",
          "12 Volt Tavern",
          "Jake's Roadhouse",
          "Odyssey Beerwerks"]},
          {
          BOOKING: "jimmy@rockabilliesbar.com",
          CAP: "",
          CITY: "Arvada",
          COMMENTS: "",
          CONTACT: "Odyssey Beerwerks Contact",
          Latitude: 39.80276,
          Longitude: -105.08748,
          NAME: "Odyssey Beerwerks",
          PA: "yes",
          POSTERS:"",
          PRESS:"",
          State: "CO",
          URL:"http://www.OdysseyBeerwerks.com",
          VENUE_PHONE:"(303) 421-1799",
          cityVenues:[
          "Rock-A-Billies",
          "12 Volt Tavern",
          "Jake's Roadhouse",
          "Odyssey Beerwerks"]}
  ]

  const wrapper = mount(
    <VenueGrid
      searchedState={'CO'}
      searchedCity={'Arvada'}
      venues={venueData}
      searchResults={arvadaCOSearchResults}
      searched={true}
    />
  )

  it('should receive the expected properties',()=>{

    expect(wrapper.node.props).toEqual(
      { searchedState: 'CO',
        searchedCity: 'Arvada',
        venues: [...venueData],
        searchResults: arvadaCOSearchResults,
        searched: true
      }
    )
  })

  it('should return the proper amount of venue cards per location searched as well as return a ui result', () => {
    const venueCount = wrapper.node.props.searchResults.length
    const venueCityLocation = wrapper.node.props.searchedCity
    const venueStateLocation = wrapper.node.props.searchedState

    expect(wrapper.find('section').length).toBe(1);
    expect(wrapper.find('.venue-card').length).toBe(4);

    expect(wrapper.find('.results-display').text()).toEqual(`${venueCount} Music Venues Found in ${venueCityLocation}, ${venueStateLocation}`)

  })

  it('should pass the proper info to each Venue card', () => {
    const venueCount = wrapper.node.props.searchResults.length
    const venueLocation = wrapper.node.props.searchedCity

    expect(wrapper.find('section').length).toBe(1);
    expect(wrapper.find('.venue-card').length).toBe(4);

    expect(wrapper.find('.venue-card').first().text()).toBe('Rock-A-BilliesArvada, COOn-Site Sound System: yesBooking Contact: Jimmy Niggjimmy@rockabilliesbar.comSend Email to Rock-A-BilliesVenue Phone: (303) 421-1799http://www.rockabilliesbar.com');

    expect(wrapper.find('.venue-card').last().text()).toBe('Odyssey BeerwerksArvada, COOn-Site Sound System: yesBooking Contact: Odyssey Beerwerks Contactjimmy@rockabilliesbar.comSend Email to Odyssey BeerwerksVenue Phone: (303) 421-1799http://www.OdysseyBeerwerks.com');

  })
})

describe('VenueGrid with larger search results passed in for whole state', () => {

  const wrapper = mount(
    <VenueGrid
      searchedState={'CO'}
      searchedCity={''}
      venues={venueData}
      searchResults={COTestData}
      searched={true}
    />
  )

  it('should receive the expected properties',()=>{
    expect(wrapper.node.props).toEqual(
      { searchedState: 'CO',
        searchedCity: '',
        venues: [...venueData],
        searchResults: COTestData,
        searched: true
      }
    )
  })

  it('should return the proper amount of venue cards per location searched as well as return a ui result with city and state', () => {

    const venueCount = wrapper.node.props.searchResults.length
    const venueLocationCity = wrapper.node.props.searchedCity
    const venueLocationState = wrapper.node.props.searchedState

    expect(wrapper.find('section').length).toBe(1);
    expect(wrapper.find('.venue-card').length).toBe(422);

    expect(wrapper.find('.results-display').text()).toEqual(`${venueCount} Music Venues Found in ${venueLocationState}`)

  })

  it('should pass the proper info to each Venue card', () => {
    const venueCount = wrapper.node.props.searchResults.length
    const venueLocation = wrapper.node.props.searchedCity

    expect(wrapper.find('section').length).toBe(1);
    expect(wrapper.find('.venue-card').length).toBe(422);

    expect(wrapper.find('.venue-card').first().text()).toBe('San Luis Valley Brewing Co.Alamosa, COBooking Contact: Scott Graberscott@slvbrewco.comSend Email to San Luis Valley Brewing Co.Venue Phone: (719) 587-2337http://slvbrewco.com/');

    expect(wrapper.find('.venue-card').last().text()).toBe("O'Bannon'sTelluride, CO");
  })

})
