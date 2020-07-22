import React from 'react'
import PropTypes from 'prop-types'

const ShowIncrement = ({ increment }) => {
  console.log('Me volví a generar :(')

  return (
    <button className="btn btn-primary" onClick={() => increment()}>
      Incrementar
    </button>
  )
}

ShowIncrement.propTypes = {
  increment: PropTypes.func
}

export default ShowIncrement
