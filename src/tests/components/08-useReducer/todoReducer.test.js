import { todoReducer } from '../../../components/08-useReducer/todoReducer'
import { demoTodos } from '../../fixtures/demoTodos'

describe('todoReducer', () => {
  test('should return default state', () => {
    const state = todoReducer(demoTodos, {})
    expect(state).toEqual(demoTodos)
  })

  test('should add a TODO', () => {
    const newTodo = {
      id: 3,
      desc: 'Aprender Express',
      done: false
    }

    const action = {
      type: 'add',
      payload: newTodo
    }

    const state = todoReducer(demoTodos, action)
    expect(state).toEqual([...demoTodos, newTodo])
  })
})
