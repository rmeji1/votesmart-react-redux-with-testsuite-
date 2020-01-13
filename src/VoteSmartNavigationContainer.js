import React from 'react'
import { NavLink } from 'react-router-dom'
const VoteSmartNavigationContainer = () => (
  <div className='navbar navbar-dark bg-primary'>
    <a to='/' className='navbar-brand'>
      VoteSmart
    </a>
    <NavLink to='/local' className='navbar-brand'>
      Local
    </NavLink>
    <NavLink to='/federal' className='navbar-brand'>
      Federal
    </NavLink>
  </div>
)

export default VoteSmartNavigationContainer

