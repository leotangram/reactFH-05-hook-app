import React from 'react'
import UseState from './components/01-useState/UseState'
import UseEffect from './components/02-useEffect/UseEffect'
import Examples from './components/03-examples/Examples'
import UseRef from './components/04-useRef/UseRef'
import UseLayoutEffect from './components/05-useLayoutEffect/UseLayoutEffect'
import Memos from './components/06-memos/Memos'
import Padre from './components/07-tarea-memo/Padre'
import TodoApp from './components/08-useReducer/TodoApp'

const App = () => {
  return (
    <>
      <UseState />
      <UseEffect />
      <Examples />
      <UseRef />
      <UseLayoutEffect />
      <Memos />
      <Padre />
      <TodoApp />
    </>
  )
}

export default App
