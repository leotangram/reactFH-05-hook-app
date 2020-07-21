import React, { useState, useMemo } from 'react'
import { useCounter } from '../../hook/useCounter'
import { heavyProccess } from '../../helpers/heavyProccess'

const MemoHook = () => {
  const { counter, increment } = useCounter(5000)
  const memoHeavyProccess = useMemo(() => heavyProccess(counter), [counter])

  const [show, setShow] = useState(true)

  return (
    <div>
      <h2>MemoHook</h2>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />
      <p>{memoHeavyProccess}</p>
      <button className="btn btn-primary" onClick={() => increment(1)}>
        +1
      </button>
      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  )
}

export default MemoHook
