import Reducer, { initialState } from "../redux/Reducer"

test('should exists', () => {
  expect(Reducer).toBeTruthy()
})

test('should have an initial state', () => {
  const testState = {
    userId: '',
    federal: null,
    proPublicaId: null,
    billId: null
  }

  expect(initialState).toEqual(testState)
})