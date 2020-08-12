import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from '../../hooks/useForm'

describe('useForm', () => {
  const initialForm = {
    name: 'Leonardo',
    email: 'leonardo@gmail.com'
  }

  test('should return a default form', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [formValues, handleInputChange, reset] = result.current

    expect(formValues).toEqual(initialForm)
    expect(typeof handleInputChange).toBe('function')
    expect(typeof reset).toBe('function')
  })

  test('should change value form', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [, handleInputChange] = result.current

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Polo'
        }
      })
    })

    const [formValues] = result.current
    expect(formValues).toEqual({ ...initialForm, name: 'Polo' })
  })

  test('should re-establish the form with RESET', () => {
    const { result } = renderHook(() => useForm(initialForm))
    const [, handleInputChange, reset] = result.current

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Polo'
        }
      })

      reset()
    })

    const [formValues] = result.current
    expect(formValues).toEqual(initialForm)
  })
})
