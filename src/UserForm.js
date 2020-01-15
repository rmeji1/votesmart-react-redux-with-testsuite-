import React, { useState } from 'react'

const UserForm = () => {
  const [state, setstate] = useState({})
  return (
    <form className='form-inline'>
      <label for='username'>Username</label>
      <input value={state.username || ''} />
    </form>
  )
}

export default UserForm
