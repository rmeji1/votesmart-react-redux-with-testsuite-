import React from 'react'
// import { describe, test, expect } from '@testing-library/jest-core'
import { MemoryRouter as Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import VoteSmartNavigationContainer from '../VoteSmartNavigationContainer'

describe ('<VoteSmartNavigationContainer>', () => {
  test('should have VoteSmart header logo', () => {
    const { getByText } = render(<Router initialEntries={['/']}><VoteSmartNavigationContainer /></Router>)
    const navBrand = getByText('VoteSmart')
    expect(navBrand).toBeDefined()
  })

  test('should have "Local" navlink', () => {
    const { getByText } = render(<Router initialEntries={['/']}><VoteSmartNavigationContainer /></Router>)
    const button = getByText('Local')
    expect(button.className).not.toMatch(/active/)
    fireEvent.click(button)
    expect(button.className).toMatch(/active/)
  })

  test('should have "Federal" navlink', () => {
    const { getByText } = render(<Router initialEntries={['/']}><VoteSmartNavigationContainer /></Router>)
    const button = getByText('Federal')
    expect(button.className).not.toMatch(/active/)
    fireEvent.click(button)
    expect(button.className).toMatch(/active/)
  })
})
