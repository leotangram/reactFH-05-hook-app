import React from 'react'
import { mount } from 'enzyme'
import LoginScreen from '../../../components/09-useContext/LoginScreen'
import { UserContext } from '../../../components/09-useContext/UserContext'

describe('<LoginScreen />', () => {
  const setUser = jest.fn()

  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  )

  test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('should eject setUser with params', () => {
    wrapper.find('button').prop('onClick')()
    expect(setUser).toHaveBeenCalledWith({
      email: 'leonardo@gmail.com',
      id: '1234',
      name: 'Leonardo'
    })
  })
})
