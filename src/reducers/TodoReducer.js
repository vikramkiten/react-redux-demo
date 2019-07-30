import { statement } from "@babel/template";
import AnotherReducer from './AnotherReducer'
import { combineReducers } from "redux";
const initialState = {
    todoList: [],
    toDoForm: {
        itemValue: ""
    }
}

function ToDoReducer(prevState = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return { ...prevState, todoList: [...prevState.todoList, { item: prevState.toDoForm.itemValue }] }
        case 'CHANGE_TODO_FORM':
            return {...prevState, toDoForm: { itemValue: action.value } }
        default:
            return prevState
    }
}

export default ToDoReducer;