import React, { useState } from 'react'

const UserForm = () => {
  const [state, setState] = useState({})
  return (
    <form
      className='form-inline'
      onSubmit={(event) => {
        event.preventDefault()
        console.log('form submitted')
      }}
    >
      <label htmlFor='username-input'>Username</label>
      <input
        name='username'
        id='username-input'
        value={state.username || ''}
        onChange={(event) => {
          setState({ [event.target.name]: event.target.value })
        }}
      />
      <button type='submit' className='btn btn-primary'>Submit</button>
    </form>
  )
}

export default UserForm
