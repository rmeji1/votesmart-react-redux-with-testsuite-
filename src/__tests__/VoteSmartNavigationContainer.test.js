import React from 'react'
import { render } from '@testing-library/react'
import VoteSmartNavigationContainer from '../VoteSmartNavigationContainer'

describe('<VoteSmartNavigationContainer>', () => {
  const { container, getByText, queryAllByTestId } = render(<VoteSmartNavigationContainer />)
test('should have VoteSmart header logo', () => {
    const navbrand = getByText('VoteSmart')
    expect(navbrand).toBeInTheDocument()
  })
})
