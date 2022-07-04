import React from "react";
import { FaPaperPlane, FaTrash } from "react-icons/fa";

export default function TodoComponent() {
  return (
    <div className="todo-div">
      <ol className="list-item" id="todo-list">
        <li className="completed">
          <span className="form-check form-check-flat">
            <label className="done-check">
              ToDo list functionality
              <input type="checkbox" className="checkbox" checked />
              <span className="checkmark"></span>
            </label>
          </span>
          <FaTrash className="my-auto trash" />
        </li>
        <li>
          <span className="form-check form-check-flat">
            <label className="done-check">
              Design other pages
              <input type="checkbox" className="checkbox" />
              <span className="checkmark"></span>
            </label>
          </span>
          <FaTrash className="my-auto trash" />
        </li>
        <li>
          <span className="form-check form-check-flat">
            <label className="done-check">
              Learn Node Js
              <input type="checkbox" className="checkbox" />
              <span className="checkmark"></span>
            </label>
          </span>
          <FaTrash className="my-auto trash" />
        </li>
        <li>
          <span className="form-check form-check-flat">
            <label className="done-check">
              Learn Mongo
              <input type="checkbox" className="checkbox" />
              <span className="checkmark"></span>
            </label>
          </span>
          <FaTrash className="my-auto trash" />
        </li>
        <li>
          <span className="form-check form-check-flat">
            <label className="done-check">
              Develope the Backend
              <input type="checkbox" className="checkbox" />
              <span className="checkmark"></span>
            </label>
          </span>
          <FaTrash className="my-auto trash" />
        </li>
      </ol>
      <TodoFormComponent />
    </div>
  );
}

export function TodoFormComponent() {
  return (
    <form
      action=""
      className="dashboard-todo-send-form"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input type="text" id="todo-list-input" placeholder="Add Todo" />
      <button id="todo-list-add-btn">
        <FaPaperPlane />
      </button>
    </form>
  );
}
