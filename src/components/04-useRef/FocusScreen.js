import React, { useRef } from 'react'

const FocusScreen = () => {
  const inputRef = useRef()

  const handleClick = () => {
    inputRef.current.select()
  }

  return (
    <div>
      <h2>FocusScreeen</h2>
      <hr />
      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Su nombre"
      />
      <button className="btn btn-outline-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </div>
  )
}

export default FocusScreen
