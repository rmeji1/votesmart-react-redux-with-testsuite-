import * as types from './Types'

export const addUserId = (userId) => ({
  type: types.ADD_USER_ID,
  userId
})

export const setFederalTo = (federal) =>({
  type: types.IS_FEDERAL,
  federal
})