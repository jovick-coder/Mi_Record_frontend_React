import axios from "axios";
import { nanoid } from "nanoid";
import React, { useContext, useEffect, useState } from "react";
import { FaPaperPlane, FaTrash } from "react-icons/fa";
import { PopUpMessageContext } from "../../context/PopUpMessageContext";
import { UserContext } from "../../context/userContext";

export default function TodoComponent() {
  const [loading, setLoading] = useState(true);
  const [todoList, setTodoList] = useState([]);

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
                    />
                  </>
                )}
              </>
            )}
          </ol>
          <TodoFormComponent getTodosFunction={getTodosFunction} />
        </div>
      </div>
    </>
  );
}

export function TodoFormComponent({ getTodosFunction }) {
  const [formTodo, setFormTodo] = useState("");
  const { setPopUpMessage } = useContext(PopUpMessageContext);

  const { getUserIdFunction } = useContext(UserContext);
  async function handelSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem("MiToken");

    const id = getUserIdFunction();
    if (formTodo === "") {
      setPopUpMessage({
        messageType: "error",
        message: "Todo is empty",
      });
      return;
    }
    const sendBody = {
      todoId: nanoid(),
      todo: formTodo,
      done: false,
      userId: id,
    };
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
      if (resp) {
        setFormTodo("");
        getTodosFunction();
      }
    } catch (error) {
      console.log(error);
      setPopUpMessage({
        messageType: "error",
        message: "error adding todo",
      });

      console.error("error-> ", error);
    }
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

export function MapTodoComponent({ todoList, getTodosFunction }) {
  return (
    <>
      {todoList.map((todoItem) => {
        const { todoId, todo, done } = todoItem;
        const token = localStorage.getItem("MiToken");

        async function todoCheckToggleFunction(id) {
          try {
            const resp = await axios.put(
              `https://mi-records.herokuapp.com/api/todo/${id}`,
              {
                headers: {
                  authorization: token,
                },
              }
            );
            if (resp) {
              getTodosFunction();
            }
          } catch (err) {
            // Handle Error Here
            console.error(err);
          }
        }

        async function deleteLinkFunction(id) {
          // confirm action
          if (window.confirm("Todo will be deleted !!!") === false) return;

          try {
            const resp = await axios.delete(
              `https://mi-records.herokuapp.com/api/todo/${id}`,
              {
                headers: {
                  authorization: token,
                },
              }
            );
            if (resp) {
              getTodosFunction();
            }
          } catch (err) {
            // Handle Error Here
            console.error(err);
          }
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
                  onChange={() => todoCheckToggleFunction(todoId)}
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
