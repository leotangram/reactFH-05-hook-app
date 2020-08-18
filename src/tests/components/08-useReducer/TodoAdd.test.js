import React from 'react'
import { shallow } from 'enzyme'
import TodoAdd from '../../../components/08-useReducer/TodoAdd'

describe('<TodoAdd />', () => {
  const handleAddTodo = jest.fn()
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />)

  test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should not call handleAddTodo', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit')
    formSubmit({ preventDefault() {} })
    expect(handleAddTodo).toHaveBeenCalledTimes(0)
  })

  test('should call handleAddTodo', () => {
    const value = 'Aprender React'
    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description'
      }
    })

    const formSubmit = wrapper.find('form').prop('onSubmit')
    formSubmit({ preventDefault() {} })
    expect(handleAddTodo).toHaveBeenCalledTimes(1)
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object))
    expect(handleAddTodo).toHaveBeenCalledWith({
      description: value,
      done: false,
      id: expect.any(Number)
    })
    expect(wrapper.find('input').prop('value')).toBe('')
  })
})
