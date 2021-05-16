import React from 'react'
import data from './data'

const People = items => {
  const list = items.items.map((item, index) => (
    <li key={index}>{item.name}</li>
  ))
  return <ul>{list}</ul>
}
const BirthdayReminder = () => {
  return (
    <div>
      Birthday reminder
      <People items={data} />
    </div>
  )
}

export default BirthdayReminder
