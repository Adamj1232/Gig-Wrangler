import React from 'react'
import { searchByState } from '../search-functions/searchCleaner';

describe('Search function tests', () => {
  it('should only return venues in the searched state', () => {

    expect(searchByState('CO', '').length).toEqual(420)
    expect(searchByState('CO', '')[400].State).toEqual('CO')
    expect(searchByState('CO', '')[0].State).toEqual('CO')
  })

  it('should only return venues in the searched state, and is not case sensative', () => {

    expect(searchByState('Ca', '').length).toEqual(154)
    expect(searchByState('cA', '').length).toEqual(154)
    expect(searchByState('ca', '').length).toEqual(154)
    expect(searchByState('Co', '').length).toEqual(420)
    expect(searchByState('cO', '').length).toEqual(420)
    expect(searchByState('co', '').length).toEqual(420)
  })

  it('should only return venues in the searched city', () => {

    expect(searchByState('', 'Nashville').length).toEqual(47)
    expect(searchByState('', 'Nashville')[40].CITY).toEqual('Nashville')
    expect(searchByState('', 'Nashville')[0].CITY).toEqual('Nashville')
  })

  it('should only return venues in the searched state, and is not case sensative', () => {

    expect(searchByState('', 'naSHvIlLe').length).toEqual(47)
    expect(searchByState('', 'nashVILLE').length).toEqual(47)
    expect(searchByState('', 'NashVilLE').length).toEqual(47)
    expect(searchByState('', 'dEnVer').length).toEqual(74)
    expect(searchByState('', 'DENVER').length).toEqual(74)
    expect(searchByState('', 'DeNVer').length).toEqual(74)

  })

  it('should only return venues in the searched city and state', () => {

    expect(searchByState('', 'columbus').length).toEqual(22)
    expect(searchByState('GA', 'colUMbuS').length).toEqual(3)
    expect(searchByState('oH', 'columbus').length).toEqual(18)
  })
})
