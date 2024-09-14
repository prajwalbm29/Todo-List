import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";

function Home() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
        .then(result => {
            setTodos(result.data);
        })
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/'+id)
        .then(result => location.reload())
        .catch(err => console.log(err))
    }

    return (
        <div className="home">
            <h1>Todo List</h1>
            <Create />
            {
                todos.length == 0 
                ?
                    <div><h2>No Records found</h2></div>
                :
                todos.map((todo, index) => (
                    <div key={index}>
                        <div className="homeTodo">
                            
                            <h2>{todo.task}</h2>
                            <button type="button" onClick={() => handleDelete(todo._id)}>DEL</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Home