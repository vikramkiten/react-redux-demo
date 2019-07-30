import {combineReducers} from'redux'
import ToDoReducer from './TodoReducer'
import AnotherReducer from './AnotherReducer'

export default combineReducers(
    ToDoReducer,
    AnotherReducer
)