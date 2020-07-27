import React, { useReducer, useEffect } from 'react'
import './styles.css'
import { todoReducer } from './todoReducer'
import { useForm } from '../../hook/useForm'

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init)
  const [formValues, handleInputChange, reset] = useForm({
    description: ''
  })
  const { description } = formValues

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleSubmit = e => {
    e.preventDefault()

    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false
    }

    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch(action)
    reset()
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>TodoApp {todos.length}</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map(({ id, description, done }, index) => (
              <li key={id} className="list-group-item">
                <p className="text-center">{`${index + 1}. ${description}`}</p>
                <button className="btn btn-danger">Borrar</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
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
        </div>
      </div>
    </div>
  )
}

export default TodoApp
