import React, { useState } from "react";
import "./TodoItem.css";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";

function TodoItem({ index, todo, todos, setTodos }) {
    const [isEdit, setIsEdit] = useState(false);
    const [editTodoName, setEditTodoName] = useState("");

    const handleDelete = () => {
        const newTodos = todos.filter((item) => {
            if (todo.id === item.id) {
                return false;
            } else {
                return true;
            }
        });

        setTodos(newTodos);
    };

    const handleEdit = () => {
        setIsEdit(!isEdit);
        setEditTodoName(todo.name);
    };

    const handleSubmit = (e) => {
        if (e.keyCode === 13) {
            const newTodos = todos.map((item) => {
                if (todo.id === item.id) {
                    return {
                        ...item,
                        name: editTodoName,
                    };
                } else {
                    return item;
                }
            });

            setTodos(newTodos);
            setIsEdit(false);
        }
    };

    const handleComplete = () => {
        const newTodos = todos.map((item) => {
            if (todo.id === item.id) {
                return {
                    ...item,
                    isComplete: !todo.isComplete,
                };
            } else {
                return item;
            }
        });

        setTodos(newTodos);
    };

    return (
        <div className="todo-item-wrapper">
            <div className="todo-item-text">
                <div>{index}.</div>
                {isEdit ? (
                    <input
                        type="text"
                        value={editTodoName}
                        onChange={(e) => {
                            setEditTodoName(e.target.value);
                        }}
                        onKeyDown={handleSubmit}
                    />
                ) : (
                    <div
                        onClick={handleComplete}
                        style={{
                            textDecoration: todo.isComplete
                                ? "line-through"
                                : "none",
                            cursor: "pointer",
                        }}
                    >
                        {todo.name}
                    </div>
                )}
            </div>

            <div className="todo-item-button" onClick={handleEdit}>
                <button className="pencil-button">
                    <PencilIcon />
                </button>

                <button className="trash-button" onClick={handleDelete}>
                    <TrashIcon />
                </button>
            </div>
        </div>
    );
}

export default TodoItem;
