import React, { useState, useEffect } from 'react'
import './index.css'

const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: '', email: '' })
  const [people, setPeople] = useState([])

  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    setPerson({ ...person, [name]: value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    setPeople([...people, person])
  }
  return (
    <article>
      <form className='form'>
        <div>
          <label htmlFor='firstName'>Name : </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={person.firstName}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor='Email'>Email : </label>
          <input
            type='text'
            id='email'
            name='email'
            value={person.email}
            onChange={handleChange}
          ></input>
        </div>
        <button type='submit' onClick={handleSubmit}>
          Add person
        </button>
      </form>
      {people.map((person, index) => {
        return (
          <div key={index}>
            <span>{person.firstName}</span>
          </div>
        )
      })}
    </article>
  )
}
export default ControlledInputs
