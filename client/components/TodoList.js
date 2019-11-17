import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getListThunk, completeTodoThunk} from '../store/todo'

class TodoList extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.getListThunk()
  }

  async handleClick(e, todoItem) {
    e.preventDefault()
    await this.props.completeTodoThunk(todoItem.id)
  }

  render() {
    console.log(this.props.todo)
    let todos = this.props.todo
    return (
      <div>
        <div id="todos-container" className="left-container">
          {todos.length || todos ? (
            todos.map(todo => (
              <div key={todo.id}>
                {todo.item}
                <button type="button" onClick={e => this.handleClick(e, todo)}>
                  are you sure you're done? if you are...then feel free to click
                  me
                </button>
              </div>
            ))
          ) : (
            <div>you ain't got no todos yet! go add one lol</div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todo
  }
}

const mapDispatchToProps = dispatch => ({
  getListThunk: () => dispatch(getListThunk()),
  completeTodoThunk: id => dispatch(completeTodoThunk(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
