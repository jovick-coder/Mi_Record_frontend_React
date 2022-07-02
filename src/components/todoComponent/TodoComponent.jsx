import React from "react";
import { FaPaperPlane, FaTrash } from "react-icons/fa";

export default function TodoComponent() {
  return (
    <div class="todo-div">
      <ol class="list-item" id="todo-list">
        <li class="completed">
          <span class="form-check form-check-flat">
            <label class="done-check">
              ToDo list functionality
              <input type="checkbox" class="checkbox" checked />
              <span class="checkmark"></span>
            </label>
          </span>
          <FaTrash className="my-auto trash" />
        </li>
        <li>
          <span class="form-check form-check-flat">
            <label class="done-check">
              Design other pages
              <input type="checkbox" class="checkbox" />
              <span class="checkmark"></span>
            </label>
          </span>
          <FaTrash className="my-auto trash" />
        </li>
        <li>
          <span class="form-check form-check-flat">
            <label class="done-check">
              Learn Node Js
              <input type="checkbox" class="checkbox" />
              <span class="checkmark"></span>
            </label>
          </span>
          <FaTrash className="my-auto trash" />
        </li>
        <li>
          <span class="form-check form-check-flat">
            <label class="done-check">
              Learn Mongo
              <input type="checkbox" class="checkbox" />
              <span class="checkmark"></span>
            </label>
          </span>
          <FaTrash className="my-auto trash" />
        </li>
        <li>
          <span class="form-check form-check-flat">
            <label class="done-check">
              Develope the Backend
              <input type="checkbox" class="checkbox" />
              <span class="checkmark"></span>
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
      class="dashboard-todo-send-form"
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
