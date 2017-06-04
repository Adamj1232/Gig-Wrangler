import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import fetchMock from 'fetch-mock'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux';
import sinon from 'sinon';



describe('App instantiation', () => {

  const wrapper = shallow(<App/>)
  it('should render the expected elements',()=>{

    expect(wrapper.find('h1').text()).toEqual('GigWrangler')
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('option').length).toBe(52);
    expect(wrapper.find('VenueGridContainer').root.length).toBe(1);
  })

  it('should have initial states starting with empty values',  () => {

    expect(wrapper.state('city')).toEqual('')
    expect(wrapper.state('state')).toEqual('')
    expect(wrapper.state('searchedCity')).toEqual('')
    expect(wrapper.state('searchedState')).toEqual('')
    expect(wrapper.state('venuesPerCity')).toEqual(0)
    expect(wrapper.state('searchResults')).toEqual([])
    expect(wrapper.state('searched')).toEqual(false)
  })

  it('should pass functional props to proper child elements',  () => {

    expect(wrapper.props().children[1].props.children[0].props.onChange.length).toEqual(1)
    expect(wrapper.props().children[1].props.children[2].props.onChange.length).toEqual(1)
    expect(wrapper.props().children[1].props.children[3].props.onClick.length).toEqual(1)
    expect(wrapper.props().children[2].props.searchResults).toEqual([])
    expect(wrapper.props().children[2].props.searchFromMap.length).toEqual(2)
    expect(wrapper.props().children[3].props).toEqual({          searchedState: '',
      searchedCity: '',
      venues: undefined,
      searchResults: [],
      searched: false })
  })
})


describe('App functionality', () => {

  it('should return all venue results when searched with empty input fields', () => {

    const wrapper = shallow(<App />)
    const input = wrapper.find('input');
    const submitBtn = wrapper.find('button')

    input.simulate('focus');
    input.simulate('change', { target: { value: '' } });
    expect(wrapper.state('searchedCity')).toEqual('')
    expect(wrapper.state('city')).toEqual('');
    expect(wrapper.state('state')).toEqual('');
    submitBtn.simulate('click', {
      preventDefault: () => {
      }
    });
    expect(wrapper.state('searchResults').length).toEqual(3298);
    expect(wrapper.state('searchedCity')).toEqual('')
    expect(wrapper.state('city')).toEqual('');    expect(wrapper.state('searched')).toEqual(true)

  })

  it('should update App state when search city is input, then clears after submit button and return searchResults found in denver and return city with first character of both words to uppercase', () => {

    const wrapper = shallow(<App />)
    const input = wrapper.find('input');
    const submitBtn = wrapper.find('button')

    expect(wrapper.state('searchedCity')).toEqual('')
    input.simulate('focus');
    input.simulate('change', { target: { value: 'san diego' } });
    expect(wrapper.state('city')).toEqual('san diego');
    submitBtn.simulate('click', {
      preventDefault: () => {
      }
    });
    expect(wrapper.state('searchedCity')).toEqual('San Diego')
    expect(wrapper.state('searched')).toEqual(true)
    expect(wrapper.state('searchResults').length).toEqual(15);
    expect(wrapper.state('searchResults')[0].CITY).toEqual('San Diego');
    expect(wrapper.state('searchResults')[5].CITY).toEqual('San Diego');
    expect(wrapper.state('searchResults')[10].CITY).toEqual('San Diego');
    expect(wrapper.state('city')).toEqual('');
 })


  it('should update App state when search City is input, then clears after submit button and return searchResults found in Wisconsin', () => {

  const wrapper = shallow(<App />)
  const dropDown = wrapper.find('select')
  const submitBtn = wrapper.find('button')

  expect(wrapper.state('searchedCity')).toEqual('')
  expect(wrapper.state('state')).toEqual('');
  dropDown.simulate('change', {target: { value : 'WI'}})
  expect(wrapper.state('state')).toEqual('WI');

  submitBtn.simulate('click', {
    preventDefault: () => {
    }
  });
  expect(wrapper.state('city')).toEqual('');
  expect(wrapper.state('searched')).toEqual(true)
  expect(wrapper.state('searchResults').length).toEqual(72);
  expect(wrapper.state('searchResults')[0].State).toEqual('WI');
  expect(wrapper.state('searchResults')[20].State).toEqual('WI');
  expect(wrapper.state('searchResults')[50].State).toEqual('WI');
 })


  it('should update App state when search State and City is input, then clears after submit button and return searchResults found in Wis city of Madison', () => {

    const wrapper = shallow(<App />)
    const dropDown = wrapper.find('select')
    const submitBtn = wrapper.find('button')
    const input = wrapper.find('input');

    expect(wrapper.state('searchedCity')).toEqual('')
    expect(wrapper.state('state')).toEqual('');
    dropDown.simulate('change', {target: { value : 'WI'}})

    input.simulate('focus');
    input.simulate('change', { target: { value: 'madison' } });
    expect(wrapper.state('city')).toEqual('madison');
    expect(wrapper.state('state')).toEqual('WI');

    submitBtn.simulate('click', {
      preventDefault: () => {
      }
    });

    expect(wrapper.state('searchedCity')).toEqual('Madison')
    expect(wrapper.state('city')).toEqual('');
    expect(wrapper.state('searched')).toEqual(true)
    expect(wrapper.state('searchResults').length).toEqual(18);
    expect(wrapper.state('searchResults')[0].State).toEqual('WI');
    expect(wrapper.state('searchResults')[0].CITY).toEqual('Madison');
    expect(wrapper.state('searchResults')[6].State).toEqual('WI');
    expect(wrapper.state('searchResults')[6].CITY).toEqual('Madison');
    expect(wrapper.state('searchResults')[12].State).toEqual('WI');
    expect(wrapper.state('searchResults')[12].CITY).toEqual('Madison');
  })

  it('typeHandler function should update the proper state according to arguments, in this case typeHandler should update venuesPerCity according to arguments', () => {

    const wrapper = shallow(<App />)
    expect(wrapper.state('city')).toEqual('')
    expect(wrapper.state('state')).toEqual('')
    expect(wrapper.state('searchedCity')).toEqual('')
    expect(wrapper.state('searchedState')).toEqual('')
    expect(wrapper.state('venuesPerCity')).toEqual(0)
    expect(wrapper.state('searchResults')).toEqual([])
    expect(wrapper.state('searched')).toEqual(false)

    wrapper.instance().typeHandler(10, 'venuesPerCity');

    expect(wrapper.state('venuesPerCity')).toEqual(10);

    wrapper.instance().typeHandler(5, 'venuesPerCity');
    expect(wrapper.state('venuesPerCity')).toEqual(5);
  })

})
