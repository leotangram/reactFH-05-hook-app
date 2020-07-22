import React from 'react'
import Memorize from './Memorize'
import MemoHook from './MemoHook'
import CallBackHook from './CallBackHook'

const Memos = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Memos</h1>
      <Memorize />
      <br />
      <MemoHook />
      <br />
      <CallBackHook />
    </div>
  )
}

export default Memos
