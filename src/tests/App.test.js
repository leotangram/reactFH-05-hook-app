import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'

describe('<App />', () => {
  test('should show correctly', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})
