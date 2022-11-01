import React from 'react'


const strikethough ={
    textDecoration: "line-though"
}

// DECONSTRUCT allTodos
const Display = ({allTodos, updateTodo, deleteTodo}) => {

    // const checkbox = (event) => {
    //     setTodo(event.target.checked)
    // }


    return (
        <fieldset>
        <h1>Tasks:</h1>
        {/* NEED CURLY BRACES WHEN RETURNING MORE THAN ONE */}
        {
            /* MAP TO ITIRATE THROUGH ALL THE TODOS */
            // todoObj object gives us access to our "todo"
            // first parameter is our object & 2nd is our index
            allTodos.map((todoObj, idx) => {
                // ADD ANOTHER RETURN TO MAKE A MULTILINE
                return(
                    <>
                        {/* {todoObj.todo}  TARGETS OUR OBJECT AND GIVES US ACCESS TO todo*/}
                        <p style={ todoObj.isComplete? strikethough: null} >{todoObj.todo}</p>
                        {/* CHECKBOX  */}
                        <input type="checkbox" onChange={() => updateTodo(idx)}  />
                        <button onClick={() => deleteTodo(idx) }>Delete</button> 
                    </>
                )
            })
            
        }   
        </fieldset>
    );
}

export default Display