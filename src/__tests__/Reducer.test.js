import reducer, { initialState } from "../redux/Reducer"
import * as types from '../redux/Types'

test('should exists', () => {
  expect(reducer).toBeTruthy()
})

describe('user id reducer', () => {
  test('should have an initial state of ""', () => {
    const testState = {
      userId: ''
    }
    expect(reducer(undefined, {}).userId).toEqual(testState.userId)
  })

  test('should update user id', () => {
    const testState = { userId: 1 }
    expect(reducer(undefined, { type: types.ADD_USER_ID, userId: 1}).userId)
      .toEqual(testState.userId)
  })
})

describe('federal reduce', () => {
  test('should have initial state of null', () => {
    const testState = { federal: null }
    expect(reducer(undefined, {}).federal).toEqual(testState.federal)
  })

  test('should set federal to true', () => {
    const testState = { federal: true }
    expect(reducer(undefined, {
      type: types.IS_FEDERAL,
      federal: true
    }).federal).toEqual(testState.federal)
  })

  test('should set federal to false', () => {
    const testState = { federal: false }
    expect(reducer(undefined, {
      type: types.IS_FEDERAL,
      federal: false
    }).federal).toEqual(testState.federal)
  })
})

describe('ProPublicaId reducer', () => {
  test('should be set to empty string', () => {
    expect(reducer(undefined, {}).proPublicaId).toEqual('')
  })

  test('should set proPublicaId to some value', () => {
    const testState = { proPublicaId: 'TEST123' }
    expect(reducer(undefined, {
      type: types.ADD_PRO_PUBLICA_ID,
      proPublicaId: testState.proPublicaId
    }).proPublicaId).toEqual(testState.proPublicaId)
  })

  test('should set proPublicaId back to initial state of ""', () => {
    const testState = { proPublicaId: '' }
    expect(reducer(undefined, {
      type: types.REMOVE_PRO_PUBLICA_ID
    }).proPublicaId).toEqual(testState.proPublicaId)
  })
  
})

