import React, { useState, useEffect } from 'react'

const Message = () => {
  const [coords, setCords] = useState({ x: 0, y: 0 })
  const { x, y } = coords

  useEffect(() => {
    const mouseMove = e => {
      const coords = { x: e.x, y: e.y }
      setCords(coords)
    }
    window.addEventListener('mousemove', mouseMove)
    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <div>
      <h4>Eres genial!</h4>
      <p>
        x: {x} y: {y}
      </p>
    </div>
  )
}

export default Message
