import React, { useState } from "react";
import Display  from "./components/Display";
import Form  from "./components/Form";



function App() {

  // STATE VARIABLES AT POP
  // ALL TODOS SO THAT STATE IS THE HIGHEST COMPONENT
  const [allTodos, setAllTodos] = useState([])


  //ADD A NEW TO DO LIST
  const addNewTodo = (newTodo) => {
    //PARENT FUNCTION
    // ([newTodo]) - WRAPPED INSIDE ARRAY BECAUSE IT RETUNRS A DICTIONARY
    // SPREAD OPERATOR TO REMEMBER ALL TODOS IN STATE
    setAllTodos([newTodo, ...allTodos])
    // PASS DOWN FUNCTION TO OUR CHILD COMPONENT(FORM)
  }

  // UPDATE TODOS CHECKBOX
  const updateTodo = (idx) => {
    console.log(idx)
    const newTodos = allTodos.map(function(todo, i){
      if (i === idx ) {
        // found the todo we need to change
        // ! - used to show the opposite of a boolean
        todo.isComplete = !todo.isComplete;
        return todo;
      } else {
        // do nothing to it
        return todo;
      }
    })
    setAllTodos(newTodos);
  }


  // DELETE HANDLER
const deleteTodo = (index) => {
  // WILL USE SPLICE METHOD OR FILTER
  const filteredTodo = allTodos.filter((todo, idx) => index !== idx ) 
  setAllTodos(filteredTodo)
}
    


  return (
    <fieldset>
    {/* PASS DOWN OUR FUNCTION AS A PROP TO OUR FORM */}
    < Form addNewTodo={addNewTodo} />
    <hr />
    {/* PASS IT ALL TODOS. IT WILL DISPLAY THE TODOS */}
    < Display updateTodo={updateTodo} allTodos={allTodos} deleteTodo={deleteTodo} />
    </fieldset>
  );
}

export default App;
