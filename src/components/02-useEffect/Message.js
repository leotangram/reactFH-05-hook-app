import React from 'react'
import { useEffect } from 'react'

const Message = () => {
  useEffect(() => {
    console.log('Componente montado')
    return () => {
      console.log('Componente desmontado')
    }
  }, [])

  return (
    <div>
      <h4>Eres genial!</h4>
    </div>
  )
}

export default Message
