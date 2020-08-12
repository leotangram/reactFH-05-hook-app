import React from 'react'
import { shallow } from 'enzyme'
import { useFetch } from '../../../hooks/useFetch'
import { useCounter } from '../../../hooks/useCounter'
import MultipleCustomHooks from '../../../components/03-examples/MultipleCustomHooks'

jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')

describe('<MultipleCustomHooks />', () => {
  useCounter.mockReturnValue({
    counter: 10,
    increment: () => {}
  })

  test('should show correctly', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    })
    const wrapper = shallow(<MultipleCustomHooks />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should show the info', () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: 'Leonardo',
          quote: 'Holi'
        }
      ],
      loading: false,
      error: null
    })

    const wrapper = shallow(<MultipleCustomHooks />)

    expect(wrapper.find('.alert').exists()).toBe(false)
    expect(wrapper.find('.mb-0').text().trim()).toBe('Holi')
    expect(wrapper.find('footer').text().trim()).toBe('Leonardo')

    console.log('wrapper: ', wrapper.html())
  })
})
