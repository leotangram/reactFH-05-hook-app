import React from 'react'
import '../02-useEffect/effects.css'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1)
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  )
  const { author, quote } = !!data && data[0]

  return (
    <div>
      <h2>CustomHooks</h2>
      <h3>BrakingBad Quotes</h3>
      <hr />
      {loading ? (
        <div className="alert alert-info text-center">loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
      <button className="btn btn-primary" onClick={() => increment(1)}>
        Siguiente frase
      </button>
    </div>
  )
}

export default MultipleCustomHooks
