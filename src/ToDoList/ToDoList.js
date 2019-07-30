import React, { Component } from 'react';
import { Paper, Typography } from "@material-ui/core";
import ToDoItem from './ToDoItem';
import { connect } from 'react-redux';
 class ToDoList extends Component {
    render() {
        return (
            <Paper >
                <Typography component="p">
                    To Do List
                </Typography>
                <ul>
                    {this.props.toDoList.map(el=> <ToDoItem value={el.item}/>)}
                </ul>

            </Paper>
        )
    }
}

const mapStateToProps = state =>{
    return {
        toDoList:state.todoList
    }
}

export default connect(mapStateToProps)(ToDoList)