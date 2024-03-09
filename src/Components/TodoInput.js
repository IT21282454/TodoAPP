import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/outline";
import {v4} from "uuid"
import "./TodoInput.css";

function TodoInput({ todos, setTodos }) {
    const [todo, setTodo] = useState("");

    const handleClick = () => {
        const newTodo = {
            id: v4(),
            name: todo,
            isComplete: false,
        };

        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
        setTodo("")
    };

    return (
        <div className="todo-input-wrapper">
            <input
                type="text"
                placeholder="Enter your todo..."
                value={todo}
                onChange={(event) => {
                    setTodo(event.target.value);
                }}
            />

            <button onClick={handleClick}>
                <PlusIcon className="plus-icon" />
            </button>
        </div>
    );
}

export default TodoInput;