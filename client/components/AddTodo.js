import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTodoThunk} from '../store/todo'

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: ''
    }
    this.handleKey = this.handleKey.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleKey(evt) {
    if (evt.key === 'Enter') {
      this.props.addTodoThunk(this.props.user.id, this.state.item)
      this.setState({item: ''})
    }
  }

  handleClick() {
    this.props.addTodoThunk(this.props.user.id, this.state.item)
    this.setState({item: ''})
  }

  render() {
    return (
      <div className="add-todo">
        <div className="searching">
          <input
            type="text"
            value={this.state.item}
            onChange={evt => this.setState({item: evt.target.value})}
            onKeyDown={this.handleKey}
          />
          <button type="submit" onClick={this.handleClick}>
            add your todo...or not.
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  addTodoThunk: (userId, item) => dispatch(addTodoThunk(userId, item))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
