import React, { useLayoutEffect, useRef, useState } from 'react'
import '../02-useEffect/effects.css'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'
import './layout.css'

const Layout = () => {
  const { counter, increment } = useCounter(1)
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  )
  const { quote } = !!data && data[0]
  const pTagRef = useRef()

  const [boxSize, setBoxSize] = useState({})

  useLayoutEffect(() => {
    setBoxSize(pTagRef.current.getBoundingClientRect())
  }, [quote])

  // useEffect(() => {
  //   setBoxSize(pTagRef.current.getBoundingClientRect())
  // }, [quote])

  return (
    <div>
      <h2>LayoutEffect</h2>
      <hr />
      <blockquote className="blockquote text-right">
        <p className="mb-0" ref={pTagRef}>
          {quote}
        </p>
      </blockquote>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
      <button className="btn btn-primary" onClick={() => increment(1)}>
        Siguiente frase
      </button>
    </div>
  )
}

export default Layout
