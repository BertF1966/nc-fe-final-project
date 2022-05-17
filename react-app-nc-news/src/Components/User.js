import React from 'react'
import { useParams } from 'react-router-dom'
import { getUser } from '../Api'

const User = () => {
    const {username} = useParams()
    console.log(useParams())
  getUser(username)
  .then(({user}) => {
      return user
  }) 
  
    return (
    <div>
      <h3>{username}</h3>
    </div>
  )
}

export default User
