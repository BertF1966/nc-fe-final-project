import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUser } from '../Api'

const User = () => {
    const {username, avatar_url} = useParams()
    const [user, setUser] = useState({})

  useEffect(() => {
    getUser(username, avatar_url)
    .then((user) => {
        setUser(user)
    }) 
  }, [username, avatar_url])

  
    return (
    <div className='user'>
      <img alt='User Avatar'src={user.avatar_url} className='user-img'/>
      <h3 className='username'>{user.username}</h3>
    </div>
  )
}

export default User
