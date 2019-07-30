import React, { Component } from 'react';
import { Paper, Typography, TextField } from "@material-ui/core";
import { connect } from 'react-redux';

class ToDoForm extends Component {

    render() {
        return (
            <Paper >
                <Typography component="p">
                    Please enter your todo here
               </Typography>
                <form onSubmit={this.props.handleToDoSubmit}>
                    <input type="text" value={this.props.value} onChange={this.props.handleToDoValueChange} />
                    <button type="submit">Add To Do</button>
                </form>

            </Paper>
        )
    }
} 

const mapStateToProps = (state)=>{
   return {
      value:state.toDoForm.value
   }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        handleToDoSubmit:(event)=>{
            event.preventDefault();
            dispatch({type:'ADD_TODO'})
        },
        handleToDoValueChange :event =>{
            event.preventDefault();
            dispatch({type:'CHANGE_TODO_FORM',value:event.target.value})
        }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(ToDoForm)