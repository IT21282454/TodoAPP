import React from "react";
import "./TodoItem.css";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";

function TodoItem({index, todo}) {
    return (
        <div className="todo-item-wrapper">
            <div className="todo-item-text">
                <div>{index}.</div>
                <div>{todo.name}</div>
            </div>

            <div className="todo-item-button">
                <button className="pencil-button">
                    <PencilIcon />
                </button>

                <button className="trash-button">
                    <TrashIcon />
                </button>
            </div>
        </div>
    );
}

export default TodoItem;
