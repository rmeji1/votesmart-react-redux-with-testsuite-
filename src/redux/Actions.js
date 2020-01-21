import * as types from './Types'

export const addUserId = (userId) => ({
  type: types.ADD_USER_ID,
  userId
})

export const setFederalTo = (federal) =>({
  type: types.IS_FEDERAL,
  federal
})

export const setProPublicaIdTo = (proPublicaId) => ({
  type: types.ADD_PRO_PUBLICA_ID,
  proPublicaId
})

export const removeProPublicaId = () => ({
  type: types.REMOVE_PRO_PUBLICA_ID
})