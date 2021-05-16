import React, { useState, useEffect } from 'react'
import './index.css'
import { async } from 'q'

const url = 'https://api.github.com/users'
const UseFetch = () => {
  const [users, setUsers] = useState([])
  const getUser = async () => {
    const response = await fetch(url)
    const users = await response.json()
    console.log(users)
  }
  useEffect(() => {
    getUser()
  }, [])
  return <div></div>
}
export default UseFetch
