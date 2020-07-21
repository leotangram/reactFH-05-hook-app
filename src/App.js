import React from 'react'
import UseState from './components/01-useState/UseState'
import UseEffect from './components/02-useEffect/UseEffect'
import Examples from './components/03-examples/Examples'
import UseRef from './components/04-useRef/UseRef'
import UseLayoutEffect from './components/05-useLayoutEffect/UseLayoutEffect'

const App = () => {
  return (
    <>
      <UseState />
      <UseEffect />
      <Examples />
      <UseRef />
      <UseLayoutEffect />
    </>
  )
}

export default App
