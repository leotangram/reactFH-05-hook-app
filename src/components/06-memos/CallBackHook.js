import React, { useState, useCallback } from 'react'
import ShowIncrement from './ShowIncrement'

const CallBackHook = () => {
  const [counter, setCounter] = useState(0)

  // const increment = () => {
  //   setCounter(counter + 1)
  // }

  const increment = useCallback(() => {
    setCounter(c => c + 1)
  }, [setCounter])

  return (
    <div>
      <h2>useCallBack Hook: {counter}</h2>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  )
}

export default CallBackHook
