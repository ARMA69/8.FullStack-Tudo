import React from 'react'

function TodoPage({user}) {
  return (
    <div>TodoPage - Hello here - {user.firstName} {user.lastName}</div>
  )
}

export default TodoPage