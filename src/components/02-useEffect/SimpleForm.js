import React, { useState, useEffect } from 'react'
import './effects.css'
import Message from './Message'

const SimpleForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: ''
  })

  const { name, email } = form

  useEffect(() => {}, [])

  useEffect(() => {}, [form])

  useEffect(() => {}, [name])

  useEffect(() => {}, [email])

  const handleInputChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value
    })
  }

  return (
    <>
      <h1>02-useEffect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {name === '123' && <Message />}
    </>
  )
}

export default SimpleForm
