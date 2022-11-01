import React, { useState } from 'react'

// DETSTRUCTURE addNewTodo from the props(app.jsx)
const Form = ({ addNewTodo }) => {

    // STATE!!!!!

    // DEFINE SATE 
    // useState("") - empty string because its for an input
    const [todo, setTodo] = useState("")



    // HANDLER FUNCTIONS!!!!!



    // TodoHandler connects to event listener onChange in input
    // DEFINE HANDLER
    const TodoHandler = (e) => {
        // setTodo comes from "todo" function in state
        setTodo(e.target.value)
    }

    // SUMBIT HANDLER
    const submitHandler = (e) => {
        //PREVENT FROM REFRESHING PAGE
        e.preventDefault();

        // CREATE OBJECT FUNCTION TO PASS DOWN TO DISPLAY
        // PASSING OUR OBJECT, WHICH INCLUDES OUR todo
        const object = {
            todo,
            'isComplete': false
        }

        // WE CALL addNewTodo when it is sumbited. we create a newtodo from our todo, variable that holds the input itself
        addNewTodo(object)
        // SET INPUT BOX BACK TO DEFAULT OR EMPTY
        setTodo("")
    }

    // COMPLETED HANDLER
    // const completeHandler = (todo) => {
    //     todo.complete = todo.complete;
    //     setAllTodos([...setAllTodos]) ;
    // }




    return (
        //onSubmit={submitHandler} - connects to our handler
        <form onSubmit={submitHandler}>
            <p>
                Todos:
                {/* TodoHandler connects to event listener onChange={TodoHandler} */}
                {/* value={todo}  SET INPUT BOX BACK TO DEFAULT OR EMPTY */}
                <input type="text" value={todo} onChange={TodoHandler} />
            </p>
            <button>Add Todo</button>
        </form>

    )
}

export default Form;