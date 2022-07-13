import React, { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaCalendarDay,
  FaCheckDouble,
  FaFolderPlus,
  FaPaperPlane,
  FaPlus,
  FaSearch,
  FaStickyNote,
  FaTasks,
  FaTrash,
  FaUserTag,
} from "react-icons/fa";
import "./ProjectPage.css";
import { nanoid } from "nanoid";
import imageAlt from "../../assets/images/alt.jpg";
import CountDownComponent, {
  CountDownFunction,
} from "../../components/countDownComponent/CountDownComponent";

function ProjectPage() {
  const [editProject, setEditProject] = useState(null);
  const [ProjectsList, setProjectsList] = useState([
    {
      projectId: nanoid(),
      imgUrl: "",
      name: "Project001",
      description:
        "this is the Description for project001, it should have a long text,",
      Progress: "pending",
      deadLine: "2022-07-20T13:00",
      projectTask: [
        {
          taskId: nanoid(),
          name: "task name",
          description: "Task Description",
          setDate: "7/13/2022",
          deadLine: "2022-07-25T13:00",
          done: true,
        },
        {
          taskId: nanoid(),
          name: "task name",
          description: "Task Description",
          setDate: "7/13/2022",
          deadLine: "2022-07-25T13:00",
          done: false,
        },
      ],
      gitLink: "#",
      liveLink: "#",
    },
    {
      projectId: nanoid(),
      imgUrl: "",
      name: "Project002",
      description:
        "this is the Description for project002, it should have a long text,",
      Progress: "completed",
      deadLine: "2022-07-25T13:00",
      projectTask: [
        {
          taskId: nanoid(),
          name: "task name",
          description: "Task Description",
          setDate: "7/13/2022",
          deadLine: "2022-07-25T13:00",
          done: false,
        },
      ],
      gitLink: "#",
      liveLink: "#",
    },
  ]);

  function editDateFunction(date) {
    const dateArray = date.split("T");
    const dateOnly = dateArray[0];
    // console.log(dateOnly.replace(/-/g, "/"));
    const dateOnlyArray = dateOnly.split("-");
    const rearrangeDate = `${dateOnlyArray[1]}/${dateOnlyArray[2]}/${dateOnlyArray[0]} `;
    return rearrangeDate;
  }
  // check if a project if found with the given id
  function checkProjectIdFunction(id) {
    const found = ProjectsList.some((el) => el.projectId === id);
    return found;
  }
  // return the found project
  function getProjectObjectFunction(id) {
    if (checkProjectIdFunction(id) !== true) return null;
    return ProjectsList.find((x) => x.projectId === id);
  }

  function getSelectedProjectIndex(id) {
    // Get index of object with specific value in array
    const index = ProjectsList.findIndex((item) => item.projectId === id);
    return index;
  }
  function deleteProjectFunction(id) {
    const projectIndex = getSelectedProjectIndex(id);
    // confirm action
    if (window.confirm("Project will deleted !!!") === false) return;
    //Remove specific value by index
    ProjectsList.splice(projectIndex, 1);

    setEditProject(null);
  }
  // console.log(getProjectObjectFunction(2));
  return (
    <div className="">
      <div className="row my-4">
        <div className="col-md-12 d-flex justify-content-around">
          <div className="my-auto">
            <span className="d-none d-sm-inline">Victor Josiah</span>
            <h1 className="head-text d-no ne d-sm-inline head-text">
              Projects
            </h1>
          </div>
          <div>
            <button className="fancy-btn long-text">
              <FaBriefcase /> Projects Report
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        {" "}
        <div className="full-main-card main-card">
          <div className=" d-flex justify-content-between">
            <b className="mx-3 my-auto">
              {/* show "New Project" if no project is selected */}
              {editProject === null ? (
                <>
                  <i className="fas fa-folder-plus"></i> New Project
                </>
              ) : (
                "Project"
              )}
            </b>

            {/* show "Add" project button if no project is selected; show "close" button to  unSelect a project */}
            {editProject === null ? (
              <label htmlFor="add-project" className="mx-3 fancy-btn">
                <div className="d-flex">
                  <FaFolderPlus />
                  Add
                </div>
              </label>
            ) : (
              <button
                className="fancy-btn"
                onClick={() => setEditProject(null)}
              >
                Close
              </button>
            )}
          </div>
          {/* show project form component if no project is selected */}
          {editProject === null ? (
            <ProjectFormComponent
              setProjectsList={setProjectsList}
              ProjectsList={ProjectsList}
            />
          ) : (
            // show view project component if a project is selected
            <ViewProject
              project={getProjectObjectFunction(editProject)}
              editProject={editProject}
              editDateFunction={editDateFunction}
              deleteProjectFunction={deleteProjectFunction}
            />
          )}
        </div>
      </div>
      {/* hide MapProject component if a project is selected */}
      {editProject === null ? (
        <div className="container border">
          <div className="row">
            <b className="py-2">
              <i className="fas fa-folder"></i> Projects
              <span id="project-count" className="record-count mx-2">
                {ProjectsList.length}
              </span>
            </b>
            <div className="d-flex project-show">
              <MapProjectList
                ProjectsList={ProjectsList}
                setEditProject={setEditProject}
                editDateFunction={editDateFunction}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProjectPage;

export function ProjectFormComponent({ setProjectsList, ProjectsList }) {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectDeadLineDate, setProjectDeadLineDate] = useState("");
  const [projectProgress, setProjectProgress] = useState("");
  const [projectGitLink, setProjectGitLink] = useState("");
  const [projectLifeLink, setProjectLifeLink] = useState("");
  const [projectImage, setProjectImage] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    const inputs = e.target;

    // validate inputs
    if (projectName === "") return console.log("Name is required");
    if (projectDescription === "")
      return console.log("Description is required");
    if (projectDeadLineDate === "") console.log("Date not selected");

    if (projectProgress === "") return console.log("Progress is not selected");

    if (projectGitLink === "") console.log("Git link not given");
    if (projectLifeLink === "") console.log("Live link not given");

    if (projectImage === "") {
      setProjectImage("../../assets/images/alt.jpg");
    }

    // validation end

    // create new object
    const newProjectObject = {
      projectId: nanoid(),
      imgUrl: projectImage,
      name: projectName,
      description: projectDescription,
      Progress: projectProgress,
      deadLine: projectDeadLineDate,
      projectTask: [],
      gitLink: projectGitLink,
      liveLink: projectLifeLink,
    };

    // // add new object to the project array
    setProjectsList([...ProjectsList, newProjectObject]);
  };
  return (
    <>
      <input type="checkbox" id="add-project" style={{ display: "none" }} />
      <div className="row justify-content-around project-form-div-row">
        <div className="col-sm-8">
          <div className="form-div dashboard-form">
            <form action="" id="project-form" onSubmit={(e) => handelSubmit(e)}>
              <div className="input-div">
                <label htmlFor="project-name">
                  <i className="fas fa-user-tag"></i>
                </label>
                <input
                  type="text"
                  id="project-name"
                  placeholder="Project Name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </div>
              <div className="textarea-div">
                <label htmlFor="description" className="text-areal-label">
                  <i className="fas fa-sticky-note"></i>
                </label>
                <textarea
                  type="'text"
                  name=""
                  id="description"
                  cols="30"
                  rows="3"
                  placeholder="Project Description"
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="input-div progress-div">
                <label>
                  <input
                    type="radio"
                    className="progress-checkbox"
                    name="progress"
                    id="progress-Pending"
                    value="Pending"
                    onClick={(e) => setProjectProgress(e.target.value)}
                  />
                  Pending
                </label>
                <label>
                  <input
                    type="radio"
                    className="progress-checkbox"
                    name="progress"
                    id="progress-InProgress"
                    value="InProgress"
                    onClick={(e) => setProjectProgress(e.target.value)}
                  />
                  InProgress
                </label>
                <label>
                  <input
                    type="radio"
                    className="progress-checkbox"
                    name="progress"
                    id="progress-Completed"
                    value="Completed"
                    onClick={(e) => setProjectProgress(e.target.value)}
                  />
                  Completed
                </label>
              </div>
              {projectProgress === "" ||
              projectProgress === "Completed" ? null : (
                <>
                  {" "}
                  <sub className="m-0">Project Dead Line</sub>
                  <div className="input-div mt-0">
                    <label htmlFor="upload-date">
                      <i className="fas fa-calendar-day"></i>
                    </label>
                    <input
                      type="datetime-local"
                      id="upload-date"
                      placeholder="Dead Line"
                      value={projectDeadLineDate}
                      onChange={(e) => setProjectDeadLineDate(e.target.value)}
                    />
                  </div>
                </>
              )}

              <div className="input-div">
                <label htmlFor="git-link">
                  <i className="fab fa-github"></i>
                </label>
                <input
                  type="text"
                  id="git-link"
                  placeholder="GitHub Link"
                  value={projectGitLink}
                  onChange={(e) => setProjectGitLink(e.target.value)}
                />
              </div>
              <div className="input-div">
                <label htmlFor="live-link">
                  <i className="fas fa-link"></i>
                </label>
                <input
                  type="text"
                  id="live-link"
                  placeholder="Live Link"
                  value={projectLifeLink}
                  onChange={(e) => setProjectLifeLink(e.target.value)}
                />
              </div>
              <div className="input-div image-upload" id="dropbox">
                <label htmlFor="project-image">
                  <i className="fas fa-image">
                    <p>
                      Click to Upload picture
                      <br />
                      OR
                      <br />
                      Drag & Drop
                    </p>
                  </i>
                </label>
                <input
                  type="file"
                  id="project-image"
                  placeholder="project-image"
                />
              </div>
              <div>
                <button type="submit" className="form-btn">
                  <i className="fas fa-paper-plane"></i>
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export const MapProjectList = ({
  ProjectsList,
  setEditProject,
  editDateFunction,
}) => {
  return (
    <>
      {ProjectsList.map((project) => {
        const {
          projectId,
          imageUrl,
          name,
          description,
          deadLine,
          Progress,
          gitLink,
          liveLink,
        } = project;

        return (
          <>
            <div
              className="main-card"
              key={projectId}
              onClick={() => setEditProject(projectId)}
            >
              <div className="img-div">
                {/* <img src={imageAlt} /> */}
                <img src={imageUrl !== "" ? imageAlt : imageUrl} />
              </div>
              <div className="text-div">
                <b>Name:</b> {name} <br />
                <p className="description">
                  <b>Description:</b>
                  {description}
                </p>
                <b>Dead Line:</b> {editDateFunction(deadLine)} <br />
                <b>Progress:</b> {Progress} <br />
                {
                  // check if git link is empty
                  gitLink !== "" ? (
                    <div className="d-flex justify-content-between">
                      <b>GitHub_Link:</b>
                      <div className="d-flex justify-content-around w-100">
                        <a href={gitLink}>
                          <i className="fas fa-globe"> Open</i>
                        </a>
                        <a href="#">
                          <i className="fas fa-clipboard"> Copy link</i>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="d-flex">
                      <b>GitHub_Link:</b>
                      <div className="d-flex justify-content-between w-100">
                        <span className="mx-1"> Empty</span>
                        <i className="fas fa-folder-plus mx-3"></i>
                      </div>
                    </div>
                  )
                }
                {
                  // check if live link is empty
                  liveLink !== "" ? (
                    <div className="d-flex justify-content-between">
                      <b>Live_Link:</b>{" "}
                      <div className="d-flex justify-content-around w-100">
                        <a href={liveLink}>
                          <i className="fas fa-globe"> Open</i>
                        </a>
                        <a href="#">
                          <i className="fas fa-clipboard"> Copy link</i>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="d-flex">
                      <b>Live_Link:</b>
                      <div className="d-flex justify-content-between w-100">
                        {" "}
                        <span className="mx-1"> Empty</span>
                        <i className="fas fa-folder-plus mx-3"></i>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export const ViewProject = ({
  project,
  editDateFunction,
  deleteProjectFunction,
}) => {
  const {
    projectId,
    imgUrl,
    name,
    description,
    Progress,
    deadLine,
    gitLink,
    liveLink,
    projectTask,
  } = project;

  function getSelectedTaskIndex(id) {
    // Get index of object with specific value in array
    const index = projectTask.findIndex((item) => item.taskId === id);
    return index;
  }

  function toggleTaskDoneFunction(id) {
    const taskIndex = getSelectedTaskIndex(id);
    // get the previous state
    let prev = projectTask[taskIndex].done;
    // update with the opposite of it
    projectTask[taskIndex].done = !prev;
  }

  function deleteTaskFunction(id) {
    const taskIndex = getSelectedTaskIndex(id);
    // confirm action
    if (window.confirm("Task will deleted !!!") === false) return;
    //Remove specific value by index
    projectTask.splice(taskIndex, 1);
  }
  // calculate the count down of a project using the deadLine
  const { day, hour, minute, second } = CountDownFunction(deadLine);
  return (
    <div className="ViewProject">
      <div className="d-flex">
        <div className="box big-box">
          <p className="fw-bolder">Project ID</p>
          {projectId}
        </div>
        <div className="box big-box">
          <p className="fw-bolder">Project Name</p>
          {name}
        </div>
      </div>
      <p className="my-3">
        <b>Description:</b> <br /> {description}
      </p>
      <div className="d-flex">
        <div className="box">
          <p className="fw-bolder">Progress</p>
          {Progress}
        </div>
        <div className="box">
          <p className="fw-bolder">Dead Line</p>
          {/* {deadLine} */}
          {Progress !== "Completed" ? (
            <div className="d-flex  justify-content-around">
              <div className="day">
                {day}
                <p>
                  <b>Day</b>
                </p>
              </div>
              <div className="hour">
                {hour}
                <p>
                  <b>Hours</b>
                </p>
              </div>
              <div className="minute">
                {minute}
                <p>
                  <b>Minutes</b>
                </p>
              </div>
              <div className="second">
                {second}
                <p>
                  <b>Seconds</b>
                </p>
              </div>
            </div>
          ) : (
            <b>Project Completed</b>
          )}
        </div>
      </div>
      <div className="d-flex">
        <div className="box">
          <p className="fw-bolder">GitHub Link</p>
          {gitLink}
        </div>
        <div className="box">
          <p className="fw-bolder">Live Link</p>
          {liveLink}
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <ProjectTaskForm project={project} />
        </div>
        <div className="col-md-6">
          <b className="d-block my-2">
            <FaTasks />
            Tasks
            <span id="project-count" className="record-count mx-2">
              {projectTask.length}
            </span>
          </b>
          <div className="reminder-task-div">
            <ul>
              {projectTask.map((task) => {
                const { taskId, name, description, setDate, deadLine, done } =
                  task;
                return (
                  <li
                    className={`task-list ${done ? "complete" : null}`}
                    key={taskId}
                  >
                    <b>Name:</b> {name}
                    <p className="pe-5">{description}</p>
                    <span className="d-flex justify-content-between pe-5">
                      <i className="">
                        <b>set :</b> {setDate}
                      </i>
                      <i className="">
                        <b>dead line :</b> {editDateFunction(deadLine)}
                      </i>
                    </span>
                    <div className="icon-div">
                      <div
                        className="done-btn p-md-2 p-1"
                        onClick={() => toggleTaskDoneFunction(taskId)}
                      >
                        <FaCheckDouble />
                      </div>
                      <div
                        className="delete-btn p-md-2 p-1"
                        onClick={() => deleteTaskFunction(taskId)}
                      >
                        <FaTrash />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div>
        <button
          className="fancy-btn bg-danger border-radius-0 mt-2"
          onClick={() => deleteProjectFunction(projectId)}
        >
          Delete Project
        </button>
      </div>
    </div>
  );
};

const ProjectTaskForm = ({ project }) => {
  const [formError, setFormError] = useState({ ok: true, message: "" });
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskData, setTaskDate] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    if (taskName === "")
      return setFormError({ ok: false, message: "Task Name is needed" });
    setFormError({ ok: true, message: "" });
    if (taskDescription === "")
      return setFormError({ ok: false, message: "Task Description is needed" });
    setFormError({ ok: true, message: "" });
    if (taskData === "")
      return setFormError({ ok: false, message: "Task Data is needed" });
    setFormError({ ok: true, message: "" });

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
        {formError.ok !== true ? (
          <div className="alert alert-danger">{formError.message}</div>
        ) : null}
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
};
