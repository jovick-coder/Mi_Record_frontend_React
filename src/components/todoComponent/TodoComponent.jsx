import { nanoid } from "nanoid";
import React, { useState } from "react";
import { FaPaperPlane, FaTrash } from "react-icons/fa";

export default function TodoComponent() {
  const [todoList, setTodoList] = useState([
    {
      todoId: nanoid(),
      todo: "ToDo list functionality",
      done: true,
    },
    {
      todoId: nanoid(),
      todo: "  Design other pages",
      done: false,
    },
    {
      todoId: nanoid(),
      todo: "   Learn Node Js",
      done: false,
    },
    {
      todoId: nanoid(),
      todo: "  Learn Mysql",
      done: false,
    },
    {
      todoId: nanoid(),
      todo: "  Develope the Backend",
      done: false,
    },
  ]);
  return (
    <div className="todo-div">
      <ol className="list-item" id="todo-list">
        {todoList.map((todoItem) => {
          const { todoId, todo, done } = todoItem;

          // check if a project if found with the given id;
          function checkTodoIdFunction(id) {
            const found = todoList.some((el) => el.todoId === id);
            return found;
          }
          // Get index of object with specific value in array
          function getSelectedTodoIndex(id) {
            if (checkTodoIdFunction(id) !== true) return null;
            const index = todoList.findIndex((item) => item.todoId === id);
            return index;
          }
          function todoCheckToggleFunction(id) {
            const index = getSelectedTodoIndex(id);
            let todoObjectCopy = [...todoList];
            const prev = todoObjectCopy[index].done;
            todoObjectCopy[index].done = !prev;

            setTodoList(todoObjectCopy);
          }

          function deleteLinkFunction(id) {
            const todoIndex = getSelectedTodoIndex(id);
            // confirm action
            if (window.confirm("Todo will be deleted !!!") === false) return;
            let todoObjectCopy = [...todoList];
            //Remove specific value by index
            todoObjectCopy.splice(todoIndex, 1);
            setTodoList(todoObjectCopy);
          }

          return (
            <li className={done ? "completed" : ""} key={todoId}>
              <span className="form-check form-check-flat">
                <label className="done-check">
                  {todo}
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={done ? true : false}
                    onClick={() => todoCheckToggleFunction(todoId)}
                  />
                  <span className="checkmark"></span>
                </label>
              </span>
              <FaTrash
                className="my-auto trash"
                onClick={() => deleteLinkFunction(todoId)}
              />
            </li>
          );
        })}
      </ol>
      <TodoFormComponent setTodoList={setTodoList} todoList={todoList} />
    </div>
  );
}

export function TodoFormComponent({ setTodoList, todoList }) {
  const [todo, setTodo] = useState("");
  return (
    <form
      action=""
      className="dashboard-todo-send-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (todo === "") return console.log("empty todo");
        const newTodo = {
          todoId: nanoid(),
          todo: todo,
          done: false,
        };
        setTodoList([...todoList, newTodo]);
        setTodo("");
      }}
    >
      <input
        type="text"
        id="todo-list-input"
        placeholder="Add Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button id="todo-list-add-btn">
        <FaPaperPlane />
      </button>
    </form>
  );
}
