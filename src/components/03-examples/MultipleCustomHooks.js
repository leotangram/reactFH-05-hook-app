import React from 'react'
import '../02-useEffect/effects.css'
import { useFetch } from '../../hook/useFetch'

const MultipleCustomHooks = () => {
  const data = useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
  console.log(data)

  return (
    <div>
      <h2>CustomHooks</h2>
    </div>
  )
}

export default MultipleCustomHooks
