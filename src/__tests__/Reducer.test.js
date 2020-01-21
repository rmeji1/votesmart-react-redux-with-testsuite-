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
})

