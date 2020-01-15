import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import UserForm from '../UserForm'

describe('<UserForm />', () => {
test('should render successfully', () => {
    render(<UserForm />)
  })
})

describe('<UserForm /> test input', () => { 
  let usernameInput
  let submit
  let getByLabel 
  beforeEach(() => {
    const { getByLabelText, getByText } = render(<UserForm />)
    getByLabel = getByLabelText
    usernameInput = getByLabelText('Username')
    submit = getByText('Submit')
  }) 

  test('should have a username input', () => {
    expect(usernameInput).toBeTruthy()
  })

  test('should change value on onChange event', () => {
    fireEvent.change(usernameInput, { target: { value: 'rmeji1' } })
    expect(usernameInput.value).toBe('rmeji1')
  })

  test('should submit username', () => {
    fireEvent.change(usernameInput, { target: { value: 'rmeji1' } })
    fireEvent.click(submit)
    expect(getByLabel('Address')).toBeTruthy()
  })
})

// describe('<UserForm /> user submissions', () => {
//   let input
//   beforeEach(() => {
//     const { getByLabelText } = render(<UserForm />)
//   })
// })
