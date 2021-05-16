import React, { useState, useEffect } from 'react'
import './index.css'

// The below useeffect only runs once with dependency list.
const UseEffectClass = () => {
  const [name, setName] = useState('Useeffect practice')
  const [count, setCount] = useState(0)
  useEffect(() => {
    setName('Effect')
    document.title = name
    console.log(count)
  }, [])
  // the below useeffect runs each the dependency list changes.
  useEffect(() => {
    setName('Second effect')
    document.title = count
  }, [count])
  // useeffect without dependency
  useEffect(() => {
    console.log(name)
  })
  return (
    <div>
      <h2>{name}</h2>
      <button onClick={() => setName('button clicked')}>Click me</button>
      <button onClick={() => setCount(count + 1)}>Set counter</button>
    </div>
  )
}
export default UseEffectClass
