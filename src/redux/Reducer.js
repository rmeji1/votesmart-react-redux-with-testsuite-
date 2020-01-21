import { combineReducers } from 'redux'
import * as types from './Types'

export const initialState = {
  userId: '',
  federal: null,
  proPublicaId: '',
  billId: ''
}

const editUserId = (userId = initialState.userId, action) => {
  switch (action.type) {
    case types.ADD_USER_ID:
      return action.userId
    default:
      return userId
  }
}

const isFederal = (federal = initialState.federal, action) => {
  switch (action.type){
    case types.IS_FEDERAL:
      return action.federal
    default: 
      return federal
  }
}

const editProPublicaId = (proPublicaId = initialState.proPublicaId, action) => {
  switch (action.type) {
    case types.ADD_PRO_PUBLICA_ID:
      return action.proPublicaId
    case types.REMOVE_PRO_PUBLICA_ID:
      return initialState.proPublicaId
    default:
      return proPublicaId;
  }
}

const editBillId = (billId = initialState.billId, action) =>{
  switch (action.type) {
    case types.ADD_BILL_ID:
      return action.billId   
    case types.REMOVE_BILL_ID:
      return initialState.billId  
    default:
      return billId
  }
}

export default combineReducers({
  userId: editUserId,
  federal: isFederal,
  proPublicaId: editProPublicaId,
  billId: editBillId
})