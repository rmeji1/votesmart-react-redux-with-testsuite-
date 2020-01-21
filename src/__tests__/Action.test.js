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

  test.todo('should remove user id')
})

describe('federal actions', () => {
  test('should create action to set fedreral to true', () => {
    const expectedAction = {
      type: types.IS_FEDERAL,
      federal: true
    }
    expect(actions.setFederalTo(true)).toEqual(expectedAction)
  })

  test('should create actoin to set federal to false', () => {
    const expectedAction = {
      type: types.IS_FEDERAL,
      federal: false
    }
    expect(actions.setFederalTo(false)).toEqual(expectedAction)
  })
})

describe('proPublicaId actions', () => {
  test('should create action to set', () => {
    expect(actions.setProPublicaIdTo('test')).toEqual({
      type: types.ADD_PRO_PUBLICA_ID,
      proPublicaId: 'test'
    })
  })

  test('should set proPublicaId to default on remove', () => {
    expect(actions.removeProPublicaId()).toEqual({
      type: types.REMOVE_PRO_PUBLICA_ID
    })
  })
})

describe('Bill id tests', () => {
  test.todo('should set action to add bill id')
  test.todo('should set action to remove bill id')
})

