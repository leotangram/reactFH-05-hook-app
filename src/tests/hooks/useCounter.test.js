import { renderHook } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter'

describe('useCounter', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useCounter())
    expect(typeof result.current.increment).toBe('function')
    expect(typeof result.current.decrement).toBe('function')
    expect(typeof result.current.reset).toBe('function')
  })
})
