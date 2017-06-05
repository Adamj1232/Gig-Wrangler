import React from 'react'
import ReactDOM from 'react-dom'
import { VenueCard } from '../components/VenueCard'
import { shallow, mount } from 'enzyme'

describe('VenueCard instantiation and printing all props available', () => {
  const wrapper = mount(
    <VenueCard
      venueName={'Sweet Venue #1'}
      state={'CO'}
      city={'Aspen'}
      url={'http://www.superSweetVenue.com/'}
      venuePhone={'(303) 999-9999'}
      bookingEmail={'sweetVenue@gmail.com'}
      bookingContact={'Super Lame Promoter'}
      PAStatus={'pretty much never'}
      venueComments={'usually nothin helpful'}
    />
  )

  it('should receive the expected properties',()=>{
    expect(wrapper.node.props).toEqual(
      { venueName: 'Sweet Venue #1',
        state: 'CO',
        city: 'Aspen',
        url: 'http://www.superSweetVenue.com/',
        venuePhone: '(303) 999-9999',
        bookingEmail: 'sweetVenue@gmail.com',
        bookingContact: 'Super Lame Promoter',
        PAStatus: 'pretty much never',
        venueComments: 'usually nothin helpful',
      }
    )
  })

  it('should display headers for section with proper information for no search results passed in', () => {
    // console.log(wrapper.debug());
    expect(wrapper.find('h3').length).toBe(1);
    expect(wrapper.find('h3').text()).toBe('Sweet Venue #1');

    expect(wrapper.find('article').props().className).toEqual('venue-card')

    expect(wrapper.find('h4').text()).toEqual(`Aspen, CO`)

    expect(wrapper.find('a').first().text()).toEqual('Send Email to Sweet Venue #1')
    expect(wrapper.find('a').last().text()).toEqual('http://www.superSweetVenue.com/')

    expect(wrapper.find('h5').length).toEqual(5)
    expect(wrapper.find('h5').first().text()).toEqual('Notes: usually nothin helpful')
    expect(wrapper.find('.venue-phone').text()).toEqual('Venue Phone: (303) 999-9999')
    expect(wrapper.find('.pa-status').text()).toEqual('On-Site Sound System: pretty much never')
    expect(wrapper.find('h5').last().text()).toEqual('Venue Phone: (303) 999-9999')
  })

  it('should render the email address correctly', () => {
    expect(wrapper.find('.booking-email').text()).toEqual('sweetVenue@gmail.comSend Email to Sweet Venue #1')

    expect(wrapper.find('.booking-email').find('a').text()).toEqual('Send Email to Sweet Venue #1')
    expect(wrapper.find('.booking-email').find('h5').text()).toEqual('sweetVenue@gmail.com')

  })
})

describe('VenueCard instantiation and printing only available props', () => {
  const wrapper = mount(
    <VenueCard
      venueName={'Sweet Venue #2'}
      state={'CO'}
      city={'Fort Collins'}
      url={'http://www.superSweetVenue.com/'}
      venuePhone={'(303) 999-9999'}
      bookingEmail={''}
      bookingContact={'Super Lame Promoter2'}
      PAStatus={''}
      venueComments={''}
    />
  )

  it('should receive the expected properties',()=>{
    expect(wrapper.node.props).toEqual(
      { venueName: 'Sweet Venue #2',
        state: 'CO',
        city: 'Fort Collins',
        url: 'http://www.superSweetVenue.com/',
        venuePhone: '(303) 999-9999',
        bookingEmail: '',
        bookingContact: 'Super Lame Promoter2',
        PAStatus: '',
        venueComments: '',
      }
    )
  })

  it('should display headers for section with proper information for no search results passed in', () => {

    expect(wrapper.find('h3').length).toBe(1);
    expect(wrapper.find('h3').text()).toBe('Sweet Venue #2');

    expect(wrapper.find('article').props().className).toEqual('venue-card')

    expect(wrapper.find('h4').text()).toEqual(`Fort Collins, CO`)

    expect(wrapper.find('a').first().text()).toEqual('http://www.superSweetVenue.com/')

    expect(wrapper.find('h5').length).toEqual(2)
    expect(wrapper.find('h5').first().text()).toEqual('Booking Contact: Super Lame Promoter2')
    expect(wrapper.find('.venue-phone').text()).toEqual('Venue Phone: (303) 999-9999')

  })
})

describe('VenueCard instantiation and printing only available props and validating the email address', () => {
  const wrapper = mount(
    <VenueCard
      venueName={'Sweet Venue #3'}
      state={'NE'}
      city={'Omaha'}
      url={'http://www.superSweetVenue.com/'}
      venuePhone={'(303) 999-9999'}
      bookingEmail={'notAValidEmail.com'}
      bookingContact={'Super Lame Promoter3'}
      PAStatus={''}
      venueComments={''}
    />
  )

  it('should receive the expected properties',()=>{
    expect(wrapper.node.props).toEqual(
      { venueName: 'Sweet Venue #3',
        state: 'NE',
        city: 'Omaha',
        url: 'http://www.superSweetVenue.com/',
        venuePhone: '(303) 999-9999',
        bookingEmail: 'notAValidEmail.com',
        bookingContact: 'Super Lame Promoter3',
        PAStatus: '',
        venueComments: '',
      }
    )
  })

  it('should display headers for section with proper information for no search results passed in', () => {

    expect(wrapper.find('h3').length).toBe(1);
    expect(wrapper.find('h3').text()).toBe('Sweet Venue #3');

    expect(wrapper.find('article').props().className).toEqual('venue-card')
    expect(wrapper.find('h4').text()).toEqual('Omaha, NE')

    expect(wrapper.find('a').first().text()).toEqual('http://www.superSweetVenue.com/')

    expect(wrapper.find('h5').length).toEqual(2)
    expect(wrapper.find('h5').first().text()).toEqual('Booking Contact: Super Lame Promoter3')
    expect(wrapper.find('h5').last().text()).toEqual('Venue Phone: (303) 999-9999')

    expect(wrapper.find('.venue-phone').text()).toEqual('Venue Phone: (303) 999-9999')

    expect(wrapper.find('.booking-email').length).toEqual(0)
  })
})
