import React, { useState } from "react";
import "./TodoList.css";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function TodoList() {
    const [todos, setTodos] = useState([]);

    return (
        <div className="todo-list-container">
            <h2>My Todos</h2>
            <TodoInput todos={todos} setTodos={setTodos} />
            <div className="todo-items-wrapper">
                {todos.map((item, index) => {
                    return (
                        <TodoItem
                            todos={todos}
                            setTodos={setTodos}
                            key={item.id}
                            index={index + 1}
                            todo={item}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default TodoList;
