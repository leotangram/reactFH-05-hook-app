import React, { useReducer, useEffect } from 'react'
import './styles.css'
import { todoReducer } from './todoReducer'
import { useForm } from '../../hook/useForm'
import TodoList from './TodoList'

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

  const handleDelete = todoId => {
    const action = {
      type: 'delete',
      payload: todoId
    }
    dispatch(action)
  }

  const handleToggle = todoId => {
    dispatch({
      type: 'toggle',
      payload: todoId
    })
  }

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
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
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
