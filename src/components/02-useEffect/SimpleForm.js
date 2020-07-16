import React, { useEffect } from 'react'
import './effects.css'
import { useState } from 'react'

const SimpleForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: ''
  })

  const { name, email } = form

  useEffect(() => {
    console.log('Hey!')
  }, [])

  useEffect(() => {
    console.log('Form cambió')
  }, [form])

  useEffect(() => {
    console.log('El name cambió')
  }, [name])

  useEffect(() => {
    console.log('El email cambió')
  }, [email])

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
    </>
  )
}

export default SimpleForm
