import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_TODO = 'GET_TODO'
const ADD_TODO = 'ADD_TODO'
const COMPLETE_TODO = 'COMPLETE_TODO'

/**
 * INITIAL STATE
 */
const defaultList = []

/**
 * ACTION CREATORS
 */
const getList = todoList => ({type: GET_TODO, todoList})
const addTodo = item => ({type: ADD_TODO, item})
const completeTodo = completedTodo => ({type: COMPLETE_TODO, completedTodo})

/**
 * THUNK CREATORS
 */
export const getListThunk = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/todos')
    dispatch(getList(data))
  } catch (err) {
    console.error(err)
  }
}

export const addTodoThunk = (userId, item) => async dispatch => {
  try {
    const {data} = await axios.post(`/api/users/${userId}/todos`, item)
    dispatch(addTodo(data))
  } catch (error) {
    console.error(error)
  }
}

export const completeTodoThunk = itemId => async dispatch => {
  try {
    const {data} = await axios.put(`/api/todos/${itemId}`)
    dispatch(completeTodo(data))
  } catch (error) {
    console.error(error)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultList, action) {
  switch (action.type) {
    case GET_TODO:
      return action.todoList
    case ADD_TODO:
      return [...state, action.item]
    case COMPLETE_TODO: {
      const itemIndex = state
        .map(item => item.id)
        .indexOf(action.completedTodo.id)
      const itemState = [
        ...state.slice(0, itemIndex),
        ...state.slice(itemIndex + 1)
      ]
      return itemState
    }
    default:
      return state
  }
}
