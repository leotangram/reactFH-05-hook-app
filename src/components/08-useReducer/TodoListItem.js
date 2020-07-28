import React from 'react'
import PropTypes from 'prop-types'

const TodoListItem = ({
  id,
  description,
  done,
  index,
  handleDelete,
  handleToggle
}) => {
  return (
    <li className="list-group-item">
      <p
        className={`${done && 'complete'}`}
        onClick={() => handleToggle(id)}
      >{`${index + 1}. ${description}`}</p>
      <button className="btn btn-danger" onClick={() => handleDelete(id)}>
        Borrar
      </button>
    </li>
  )
}

TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired
}

export default TodoListItem
