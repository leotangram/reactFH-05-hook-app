import React from 'react'
import CounterApp from './components/01-useState/CounterApp'
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook'

const App = () => {
  return (
    <>
      <div>
        <h1>01-useState</h1>
        <CounterApp />
        <CounterWithCustomHook />
      </div>
    </>
  )
}

export default App
