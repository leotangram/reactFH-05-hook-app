import React, { useReducer } from 'react'
import './styles.css'
import { todoReducer } from './todoReducer'

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Aprender React',
    done: false
  }
]

const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState)

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>TodoApp</h1>
      <hr />
      <ul>
        <li>Hola</li>
        <li>Mundo</li>
        <li>Hola de nuevo</li>
      </ul>
    </div>
  )
}

export default TodoApp
