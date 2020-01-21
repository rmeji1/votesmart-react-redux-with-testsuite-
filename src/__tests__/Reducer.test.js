import reducer, { initialState } from "../redux/Reducer"
import * as types from '../redux/Types'

test('should exists', () => {
  expect(reducer).toBeTruthy()
})

describe('user id reducer', () => {
  test('should have an initial state', () => {
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

