import React from 'react'
// import { MemoryRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import JumbotronContainer from '../JumbotronContainer'

describe('<JumbotronContainer />', () => {
  test('should contain a Jumbotron Container', () => {
    const { container } = render(<JumbotronContainer />)
    expect(container.firstChild.className).toMatch(/jumbotron/)
    expect(container.firstChild.className).toMatch(/text-center/)
  })

  test('should have the text "Welcome to VoteSmart!" centered', () => {
    const { container, getByText } = render(<JumbotronContainer />)
    expect(getByText('Welcome to VoteSmart!')).toBeDefined()
  })

  test('should have login form', () => {
    const { container, getByRole } = render(<JumbotronContainer />)
    expect(getByRole('form')).toBeDefined()
  })
})