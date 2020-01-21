import * as actions from '../redux/Actions'
import * as types from '../redux/Types'

describe('test user actions', () => {
  test('should add user id', () => {
    const expectedAction = {
      type: types.ADD_USER_ID,
      userId: 1
    }
    expect(actions.addUserId(1)).toEqual(expectedAction)
  })
})

describe('federal actions', () => {
  test('should create action to set fedreral to true', () => {
    const expectedAction = {
      type: types.IS_FEDERAL,
      federal: true
    }
    expect(actions.setFederalTo(true)).toEqual(expectedAction)
  })
})
