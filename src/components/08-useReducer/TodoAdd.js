import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from '../../hook/useForm'

const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    if (description.trim().length <= 1) return
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false
    }

    handleAddTodo(newTodo)
    reset()
  }

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Aprender..."
          autoComplete="off"
          className="form-control"
          value={description}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-outline-primary mt-1 btn-block"
          type="submit"
        >
          Agregar
        </button>
      </form>
    </>
  )
}

TodoAdd.propTypes = {
  handleAddTodo: PropTypes.func.isRequired
}

export default TodoAdd
