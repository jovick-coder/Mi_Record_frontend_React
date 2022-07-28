import React, { useContext, useState } from "react";

function TaskComponent() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskData, setTaskDate] = useState("");

  const { setPopUpMessage } = useContext(PopUpMessageContext);
  const handelSubmit = (e) => {
    e.preventDefault();
    if (taskName === "")
      return setPopUpMessage({
        messageType: "error",
        message: "Task Name is needed",
      });
    if (taskDescription === "")
      return setPopUpMessage({
        messageType: "error",
        message: "Task Description is needed",
      });
    if (taskData === "")
      return setPopUpMessage({
        messageType: "error",
        message: "Task Data is needed",
      });

    project.projectTask.push({
      taskId: nanoid(),
      name: taskName,
      description: taskDescription,
      setDate: new Date().toLocaleDateString(),
      deadLine: taskData,
      done: false,
    });
  };
  return (
    <div className="form-div dashboard-form mt-2">
      <form
        action=""
        onSubmit={(e) => {
          handelSubmit(e);
        }}
      >
        <div className="input-div">
          <label htmlFor="task-name">
            <FaUserTag />
          </label>
          <input
            type="text"
            id="task-name"
            placeholder="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className="textarea-div">
          <label htmlFor="password" className="text-areal-label">
            <FaStickyNote />
          </label>
          <textarea
            name=""
            cols="30"
            rows="3"
            placeholder="Task description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          ></textarea>
        </div>
        <sub className="m-0">Task Dead Line</sub>
        <div className="input-div mt-0">
          <label htmlFor="task-date">
            <FaCalendarDay />
          </label>
          <input
            type="datetime-local"
            id="task-date"
            placeholder="Dead Line"
            value={taskData}
            onChange={(e) => setTaskDate(e.target.value)}
          />
        </div>
        <div>
          <button className="form-btn">
            <FaPaperPlane />
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskComponent;
