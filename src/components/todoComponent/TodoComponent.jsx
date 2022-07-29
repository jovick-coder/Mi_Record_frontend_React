import axios from "axios";
import { nanoid } from "nanoid";
import React, { useContext, useEffect, useState } from "react";
import { FaPaperPlane, FaTrash } from "react-icons/fa";
import { PopUpMessageContext } from "../../context/PopUpMessageContext";
import { UserContext } from "../../context/userContext";

export default function TodoComponent() {
  const [loading, setLoading] = useState(true);
  const [todoList, setTodoList] = useState([]);

  const { setPopUpMessage } = useContext(PopUpMessageContext);
  const { getUserIdFunction } = useContext(UserContext);

  const id = getUserIdFunction();

  async function getTodosFunction() {
    // setLoading(true);
    const token = localStorage.getItem("MiToken");

    try {
      const resp = await axios.get(
        `https://mi-records.herokuapp.com/api/todo/${id}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      setLoading(false);
      setTodoList(resp.data.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }
  useEffect(() => {
    getTodosFunction();
  }, []);
  return (
    <>
      <div className="main-card">
        <b>
          <i className="fas fa-clipboard-list"></i> Todo{" "}
          <span className="record-count">{todoList.length}</span>
        </b>
        <div className="todo-div">
          <ol className="list-item" id="todo-list">
            {loading ? (
              <>Loading...</>
            ) : (
              <>
                {todoList.length === 0 ? (
                  <li>No todo found; add one :-) </li>
                ) : (
                  <>
                    <MapTodoComponent
                      todoList={todoList}
                      getTodosFunction={getTodosFunction}
                      setTodoList={setTodoList}
                      loading={loading}
                      setLoading={setLoading}
                    />
                  </>
                )}
              </>
            )}
          </ol>
          <TodoFormComponent setTodoList={setTodoList} todoList={todoList} />
        </div>
      </div>
    </>
  );
}

export function TodoFormComponent({ setTodoList, todoList }) {
  const [formTodo, setFormTodo] = useState("");
  const { setPopUpMessage } = useContext(PopUpMessageContext);

  async function getTodosFunction() {
    const sendBody = {};

    const token = localStorage.getItem("MiToken");
    try {
      const resp = await axios.post(
        `https://mi-records.herokuapp.com/api/todo`,
        sendBody,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(resp);
      // if (resp.data.ok) {
      setPopUpMessage({
        messageType: "success",
        message: "Transaction SuccessFul",
      });

      // }
    } catch (error) {
      // if (error.response.data.ok) {
      // console.log(error);
      setPopUpMessage({
        messageType: "error",
        message: error.message,
      });

      // }

      console.log("error-> ", error);
    }
  }

  function handelSubmit(e) {
    e.preventDefault();
    if (formTodo === "") {
      setPopUpMessage({
        messageType: "error",
        message: "Todo is empty",
      });
      return;
    }
    const newTodo = {
      todoId: nanoid(),
      todo: formTodo,
      done: false,
    };
    // setTodoList([...todoList, newTodo]);
    setFormTodo("");
  }
  return (
    <form
      action=""
      className="dashboard-todo-send-form"
      onSubmit={(e) => {
        handelSubmit(e);
      }}
    >
      <input
        type="text"
        id="todo-list-input"
        placeholder="Add Todo"
        value={formTodo}
        onChange={(e) => setFormTodo(e.target.value)}
      />
      <button id="todo-list-add-btn">
        <FaPaperPlane />
      </button>
    </form>
  );
}

export function MapTodoComponent({
  todoList,
  setTodoList,
  loading,
  setLoading,
  getTodosFunction,
}) {
  return (
    <>
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
        async function todoCheckToggleFunction(id) {
          const token = localStorage.getItem("MiToken");

          try {
            const resp = await axios.put(
              `https://mi-records.herokuapp.com/api/todo/${id}`,
              {
                headers: {
                  authorization: token,
                },
              }
            );
            getTodosFunction();
          } catch (err) {
            // Handle Error Here
            console.error(err);
          }
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
    </>
  );
}
