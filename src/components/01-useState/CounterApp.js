import React, { useState } from 'react'
import './counter.css'

const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20
  })

  const { counter1, counter2 } = state

  return (
    <>
      <h2>Counter</h2>
      <h3>Counter {counter1}</h3>
      <h3>Counter {counter2}</h3>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() =>
          setState({
            ...state,
            counter1: counter1 + 1
          })
        }
      >
        +1
      </button>
    </>
  )
}

export default CounterApp
