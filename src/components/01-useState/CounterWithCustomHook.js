import React from 'react'
import { useCounter } from '../../hooks/useCounter'

const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(100)

  return (
    <>
      <h2>Counter with hook</h2>
      <h3>Counter with hook: {counter}</h3>
      <hr />
      <button className="btn btn-primary" onClick={() => increment(2)}>
        + 1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrement(2)}>
        - 1
      </button>
    </>
  )
}

export default CounterWithCustomHook
