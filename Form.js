import React, { useState } from 'react'
import './index.css'

const Form = () => {
  const [name, setName] = useState({ name: 'peter', age: 24 })
  const handleChange = () => {
    setName({ ...name, age: 89 })
  }
  return (
    <div>
      <h2>{name.name}</h2>
      <h2>{name.age}</h2>
      <button type='button' onClick={handleChange}>
        Click here!
      </button>
    </div>
  )
}
export default Form
