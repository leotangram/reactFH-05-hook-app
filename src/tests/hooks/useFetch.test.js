import { renderHook } from '@testing-library/react-hooks'
import { useFetch } from '../../hooks/useFetch'

describe('useFetch', () => {
  test('should return default info', () => {
    const { result } = renderHook(() =>
      useFetch('https://www.breakingbadapi.com/api/quotes/1')
    )
    const { data, loading, error } = result.current
    expect(data).toBe(null)
    expect(loading).toBe(true)
    expect(error).toBe(null)
  })

  test('should have desired info, loading false, error null, ', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://www.breakingbadapi.com/api/quotes/1')
    )
    await waitForNextUpdate()
    const { data, loading, error } = result.current

    expect(data.length).toBe(1)
    expect(loading).toBe(false)
    expect(error).toBe(null)
  })

  test('should be manage the error', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch('https://www.breakingbadapi.com/apid/quotes/1')
    )
    await waitForNextUpdate()
    const { data, loading, error } = result.current

    expect(data).toBe(null)
    expect(loading).toBe(false)
    expect(error).toBe('No se pudo cargar la info')
  })
})
