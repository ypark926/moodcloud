import React from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'

const Unproductive = () => (
  <div className="unproductive">
    <h2>
      so now that you're here...you might as well make a todo list cuz you have
      nothing better to do with your life at the moment. ofc, you don't have to
      if you don't want to.
    </h2>
    <AddTodo />
    <TodoList />
  </div>
)

export default Unproductive
