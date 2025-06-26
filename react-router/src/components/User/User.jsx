import React from 'react'
import {useParams} from 'react-router-dom'

function User() {

    const {userId} = useParams()
  return (
    <div>User : {userId}</div>
  )
}

export default User

// usecase ho skta ki tumhe input id ke user ki details show krni hai toh you can fetch data from database
