import React, { useEffect, useState, useContext } from "react";
import {
  FaBriefcase,
  FaCalendarDay,
  FaCheckDouble,
  FaClipboard,
  FaEdit,
  FaFolderPlus,
  FaGlobe,
  FaPaperPlane,
  FaPlus,
  FaPlusCircle,
  FaRegPlusSquare,
  FaSave,
  FaSearch,
  FaStickyNote,
  FaTasks,
  FaTimesCircle,
  FaTrash,
  FaUserTag,
} from "react-icons/fa";
import "./ProjectPage.css";
import { nanoid } from "nanoid";
import imageAlt from "../../assets/images/alt.jpg";
import CountDownComponent, {
  CountDownFunction,
} from "../../components/countDownComponent/CountDownComponent";
import { PopUpMessageContext } from "../../context/PopUpMessageContext";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";

function ProjectPage() {
  const [editProject, setEditProject] = useState(null);
  const { editDateFunction, userAccountInformation } = useContext(UserContext);

  const userName = userAccountInformation[0].fullName;
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
      gitLink: "www.github.com",
      liveLink: "",
    },
    {
      projectId: nanoid(),
      imgUrl: "",
      name: "Project002",
      description:
        "this is the Description for project002, it should have a long text,",
      Progress: "completed",
      deadLine: "2022-07-13T18:44",
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
  return (
    <div className="">
      <div className="row my-4">
        <div className="col-md-12">
          <div className="ms-2">
            <span className="d-none d-sm-inline">{userName}</span>
            <h1 className="head-text">Projects</h1>
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
  const { setPopUpMessage } = useContext(PopUpMessageContext);

  const handelSubmit = (e) => {
    e.preventDefault();
    const inputs = e.target;

    // validate inputs
    if (projectName === "")
      return setPopUpMessage({
        messageType: "error",
        message: "Name is required",
      });
    if (projectDescription === "")
      return setPopUpMessage({
        messageType: "error",
        message: "Description is required",
      });

    if (projectProgress === "")
      return setPopUpMessage({
        messageType: "error",
        message: "Progress is not selected",
      });
    if (projectProgress !== "Completed" && projectDeadLineDate === "")
      setPopUpMessage({
        messageType: "error",
        message: "Date not selected",
      });

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
  const { copyLinkFunction } = useContext(UserContext);
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
            <div className="main-card project-card" key={projectId}>
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
                          <FaGlobe />
                          Open
                        </a>
                        <a
                          href="#"
                          type="button"
                          onClick={() => copyLinkFunction(liveLink)}
                        >
                          <FaClipboard />
                          Copy link
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="d-flex">
                      <b>GitHub_Link:</b>
                      <div className="d-flex justify-content-between w-100">
                        <span className="mx-1"> Empty</span>
                        <FaPlusCircle
                          onClick={() => setEditProject(projectId)}
                        />
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
                        <a href={gitLink}>
                          <FaGlobe />
                          Open
                        </a>
                        <a
                          href="#"
                          type="button"
                          onClick={() => copyLinkFunction(liveLink)}
                        >
                          <FaClipboard />
                          Copy link
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="d-flex">
                      <b>Live_Link:</b>
                      <div className="d-flex justify-content-between w-100">
                        <span className="mx-1"> Empty</span>
                        <FaPlusCircle
                          onClick={() => setEditProject(projectId)}
                        />
                      </div>
                    </div>
                  )
                }
                <button
                  className="fancy-btn float-end h-25 border"
                  onClick={() => setEditProject(projectId)}
                >
                  View Project
                </button>
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
          {/* Check if project progress is completed */}
          {Progress !== "completed" ? (
            <>
              {/* Check if project is out of time on deadline count down */}
              {day === 0 && hour === 0 && minute === 0 && second === 0 ? (
                <b className="text-danger">Out Of Time</b>
              ) : (
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
              )}
            </>
          ) : (
            <b>Project Completed</b>
          )}
        </div>
      </div>
      <div className="d-flex">
        <div className="box">
          <p className="fw-bolder">GitHub Link</p>
          <ShowLink link={gitLink} />
        </div>
        <div className="box">
          <p className="fw-bolder">Live Link</p>
          <ShowLink link={liveLink} />
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

export function ShowLink({ link }) {
  const [editLink, setEditLink] = useState(false);
  const [newLink, setNewLink] = useState("");
  const { copyLinkFunction } = useContext(UserContext);
  const { setPopUpMessage } = useContext(PopUpMessageContext);

  function saveLinkEdit() {
    if (newLink === "")
      return setPopUpMessage({
        messageType: "error",
        message: "Link is empty",
      });

    setPopUpMessage({
      messageType: "info",
      message: "Link not updated, update will come it the new release",
    });
  }
  return (
    <div className="d-flex justify-content-around">
      {editLink ? (
        <>
          <input
            type="text"
            className="form-control w-75"
            placeholder={link}
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
          />
          <span className="my-auto">
            <FaSave onClick={() => saveLinkEdit()} />{" "}
            <FaTimesCircle onClick={() => setEditLink(false)} />
          </span>
        </>
      ) : (
        <>
          {link === "" ? (
            <>
              empty
              <FaEdit onClick={() => setEditLink(true)} />
            </>
          ) : (
            <>
              <div className="w-100">{link}</div>
              <span>
                {" "}
                <a
                  href="#"
                  type="button"
                  className="d-inline mx-1"
                  onClick={() => setEditLink(true)}
                >
                  <FaEdit /> edit
                </a>
                <a href={link} className="d-inline mx-2">
                  <FaGlobe />
                  Open
                </a>
                <a
                  href="#"
                  type="button"
                  className="d-inline mx-1"
                  onClick={() => copyLinkFunction(link)}
                >
                  <FaClipboard />
                  Copy link
                </a>
              </span>
            </>
          )}
        </>
      )}
    </div>
  );
}

const ProjectTaskForm = ({ project }) => {
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
};
