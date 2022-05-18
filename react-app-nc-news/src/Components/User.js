import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUser } from '../Api'

const User = () => {
    const {username, avatar_url} = useParams()
    const [user, setUser] = useState({})
    // console.log(useParams(), '<<<<<< req.params in User component')

  useEffect(() => {
    getUser(username, avatar_url)
    .then((user) => {
      console.log(user.username, '<<<<< in User component')
        setUser(user)
    }) 
  }, [])

  
    return (
    <div className='user'>
      <img src={user.avatar_url} className='user-img'/>
      <h3 className='username'>{user.username}</h3>
    </div>
  )
}

export default User
