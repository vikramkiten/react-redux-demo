import React, {Component} from 'react';

export default class ToDoItem extends Component{
    render(){
        return (
            <li>{this.props.value} <button>Delete</button> </li>
        )
    }
}