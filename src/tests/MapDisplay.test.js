import React from 'react'
import ReactDOM from 'react-dom'
import MapDisplay from '../components/MapDisplay'
import { shallow, mount } from 'enzyme'

describe('MapDisplay instantiation and printing all props available', () => {
  var mockFn = jest.fn()

  // const wrapper = mount(
  //   <MapDisplay
  //     mapElement={ <div className='mapElement' /> }
  //     containerElement={ <div className='containerElement'/> }
  //     searchResults={[]}
  //     venuesPerCity={0}
  //     searchFromMap={mockFn}
  //     mapPinFilter={mockFn}
  //   />
  // )

  it.skip('should receive the expected properties',()=>{
    expect(true)
    console.log(wrapper);
    // expect(wrapper.node.props).toEqual(
    //   { venueName: 'Sweet Venue #1',
    //     state: 'CO',
    //     city: 'Aspen',
    //     url: 'http://www.superSweetVenue.com/',
    //     venuePhone: '(303) 999-9999',
    //     bookingEmail: 'sweetVenue@gmail.com',
    //     bookingContact: 'Super Lame Promoter',
    //     PAStatus: 'pretty much never',
    //     venueComments: 'usually nothin helpful',
    //   }
    // )
  })

  it.skip('should display headers for section with proper information for no search results passed in', () => {
    // console.log(wrapper.debug());
    expect(wrapper.find('h3').length).toBe(1);
    expect(wrapper.find('h3').text()).toBe('Sweet Venue #1');

    expect(wrapper.find('article').props().className).toEqual('venue-card')

    expect(wrapper.find('h4').text()).toEqual(`Aspen, CO`)

    expect(wrapper.find('a').first().text()).toEqual('http://www.superSweetVenue.com/')
    expect(wrapper.find('a').last().text()).toEqual('Send Email to Sweet Venue #1')

    expect(wrapper.find('h5').length).toEqual(5)
    expect(wrapper.find('h5').first().text()).toEqual('Booking Contact: Super Lame Promoter')
    expect(wrapper.find('.venue-phone').text()).toEqual('Venue Phone: (303) 999-9999')
    expect(wrapper.find('.pa-status').text()).toEqual('PA: pretty much never')
    expect(wrapper.find('h5').last().text()).toEqual('Venue Comments: usually nothin helpful')
  })

})
