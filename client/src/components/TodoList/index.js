import React from 'react'

function TodoList({todos}) {
  return (
    <>
    <div>TodoList</div>
     {todos.map(td=> <li>{td}</li>)}
    </>
  )
}

export default TodoList