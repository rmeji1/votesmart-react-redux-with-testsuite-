import { combineReducers } from 'redux'
import * as types from './Types'

export const initialState = {
  userId: '',
  federal: null,
  proPublicaId: null,
  billId: null
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
    default: 
      return federal
  }
}

const editProPublicaId = (proPublicaId = initialState.proPublicaId, action) => {
  switch (action.type) {
    // case value:
    //   break;
    default:
      return proPublicaId;
  }
}

const editBillId = (billId = initialState.billId, action) =>{
  switch (action.type) {
    // case value:     
    //   break;
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