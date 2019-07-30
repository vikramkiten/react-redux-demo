import React from 'react';
import ButtonAppBar from './AppBar/AppBar';
import ToDoForm from './ToDoForm/ToDoForm';
import ToDoList from './ToDoList/ToDoList';
function App() {
  return (
    <div>
      <ButtonAppBar />
      <ToDoForm />
      <ToDoList />
    </div>
  );
}

export default App;
