import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import UserForm from '../UserForm'

describe('<UserForm />', () => {
test('should render successfully', () => {
    render(<UserForm />)
  })

  test('should have a username input', () => {
    const { getByLabelText } = render(<UserForm />)
    const usernameInput = getByLabelText('username-input')
    expect(usernameInput).toBeTruthy()
  })

  test('should change value on onChange event', () => {
    const { getByLabelText } = render(<UserForm />)
    const usernameInput = getByLabelText('username-input')
    fireEvent.change(usernameInput, { target: { value: 'rmeji1' } })
    expect(usernameInput.value).toBe('rmeji1')
  })
})
