import React from 'react'
import {Link} from 'react-router-dom'
import './error.css'
const Error = () => {
  return (
    <div className='error_page'>
      <h2>Error Page</h2>
      <p>Your Address has no correspondance with our pages  </p>
      <Link to='/'>
        <button className='btn btn-outline-primary'>Return To Home</button>
      </Link>
    </div>
  )
}

export default Error