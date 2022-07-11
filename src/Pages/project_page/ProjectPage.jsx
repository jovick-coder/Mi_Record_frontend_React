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

function ProjectPage() {
  const [editProject, setEditProject] = useState(null);
  const [ProjectsList, setProjectsList] = useState([
    {
      projectId: nanoid(),
      imgUrl: "",
      name: "Project001",
      discretion:
        "this is the discretion for project001, it should have a long text,",
      Progress: "pending",
      deadLine: "2:30:03, AM",
      projectTask: [
        {
          taskId: nanoid(),
          name: "task name",
          description: "Task Discretion",
          setDate: "2,03,2022",
          deadLine: "3,04,2022",
          done: true,
        },
        {
          taskId: nanoid(),
          name: "task name",
          description: "Task Discretion",
          setDate: "2,03,2022",
          deadLine: "3,04,2022",
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
      discretion:
        "this is the discretion for project002, it should have a long text,",
      Progress: "completed",
      deadLine: "5:20:00, AM",
      projectTask: [
        {
          taskId: nanoid(),
          name: "task name",
          description: "Task Discretion",
          setDate: "2,03,2022",
          deadLine: "3,04,2022",
          done: false,
        },
      ],
      gitLink: "#",
      liveLink: "#",
    },
  ]);
  // useEffect(() => {
  //   console.log(getProjectObject(editProject));
  // }, [editProject]);
  function checkProjectId(id) {
    const found = ProjectsList.some((el) => el.projectId === id);
    return found;
  }
  function getProjectObject(id) {
    if (checkProjectId(id) !== true) return null;
    return ProjectsList.find((x) => x.projectId === id);
  }
  // console.log(getProjectObject(2));
  return (
    <div className="main-d ashboard-page">
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
              {editProject === null ? (
                <>
                  <i className="fas fa-folder-plus"></i> New Project
                </>
              ) : (
                "Project"
              )}
            </b>

            {editProject === null ? (
              <label htmlFor="add-project" className="mx-3 fancy-btn">
                <div className="d-flex">
                  <FaFolderPlus />
                  Add
                </div>
              </label>
            ) : (
              <button
                className="fancy-btn bg-danger"
                onClick={() => setEditProject(null)}
              >
                Close
              </button>
            )}
          </div>
          {editProject === null ? (
            <ProjectFormComponent />
          ) : (
            <ViewProject project={getProjectObject(editProject)} />
          )}
        </div>
      </div>
      {editProject === null ? (
        <div className="container border">
          <div className="row">
            <b>
              <i className="fas fa-folder"></i> Projects
              <span id="project-count" className="record-count mx-2">
                {ProjectsList.length}
              </span>
            </b>
            <div className="d-flex project-show">
              <MapProjectList
                ProjectsList={ProjectsList}
                setEditProject={setEditProject}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProjectPage;

export function ProjectFormComponent() {
  const handelSubmit = (e) => {
    e.preventDefault();
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
                />
              </div>
              <div className="textarea-div">
                <label htmlFor="discretion" className="text-areal-label">
                  <i className="fas fa-sticky-note"></i>
                </label>
                <textarea
                  type="'text"
                  name=""
                  id="discretion"
                  cols="30"
                  rows="3"
                  placeholder="Project Discretion"
                ></textarea>
              </div>
              {/* <!-- <sub className="m-0">Task Dead Line</sub> --> */}
              <div className="input-div mt-0">
                <label htmlFor="upload-date">
                  <i className="fas fa-calendar-day"></i>
                </label>
                <input
                  type="datetime-local"
                  id="upload-date"
                  placeholder="Dead Line"
                />
              </div>
              <div className="input-div progress-div">
                <label>
                  <input
                    type="radio"
                    className="progress-checkbox"
                    name="progress"
                    id="progress-Pending"
                    value="Pending"
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
                  />
                  Completed
                </label>
              </div>
              <div className="input-div">
                <label htmlFor="git-link">
                  <i className="fab fa-github"></i>
                </label>
                <input type="text" id="git-link" placeholder="GitHub Link" />
              </div>
              <div className="input-div">
                <label htmlFor="live-link">
                  <i className="fas fa-link"></i>
                </label>
                <input type="text" id="live-link" placeholder="Live Link" />
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

export const MapProjectList = ({ ProjectsList, setEditProject }) => {
  return (
    <>
      {ProjectsList.map((project) => {
        const {
          projectId,
          imageUrl,
          name,
          discretion,
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
                <b>Discretion:</b>
                {discretion} <br />
                <b>Dead Line:</b> {deadLine} <br />
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
                        <a href="">
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
                  // check if git link is empty
                  liveLink !== "" ? (
                    <div className="d-flex justify-content-between">
                      <b>Live_Link:</b>{" "}
                      <div className="d-flex justify-content-around w-100">
                        <a href={liveLink}>
                          <i className="fas fa-globe"> Open</i>
                        </a>
                        <a href="">
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

export function ViewProject({ project }) {
  const {
    projectId,
    imgUrl,
    name,
    discretion,
    Progress,
    deadLine,
    gitLink,
    liveLink,
    projectTask,
  } = project;
  return (
    <div>
      <ul>
        <li>
          {" "}
          <b>projectId:</b>
          {projectId}
        </li>
        <li>
          {" "}
          <b>imgUrl:</b>
          {imgUrl}
        </li>
        <li>
          {" "}
          <b>name:</b>
          {name}
        </li>
        <li>
          {" "}
          <b>discretion:</b>
          {discretion}
        </li>

        <li>
          {" "}
          <b>Progress:</b>
          {Progress}
        </li>
        <li>
          {" "}
          <b>deadLine:</b>
          {deadLine}
        </li>
        <li>
          {" "}
          <b>gitLink:</b>
          {gitLink}
        </li>
        <li>
          {" "}
          <b>liveLink:</b>
          {liveLink}
        </li>
      </ul>
      <div className="row">
        <div className="col-md-6">
          <div className="form-div dashboard-form">
            <form action="">
              <div className="input-div">
                <label htmlFor="task-name">
                  <FaUserTag />
                </label>
                <input type="text" id="task-name" placeholder="Task Name" />
              </div>
              <div className="textarea-div">
                <label htmlFor="password" className="text-areal-label">
                  <FaStickyNote />
                </label>
                <textarea
                  name=""
                  // id="discribtion"
                  cols="30"
                  rows="3"
                  placeholder="Task Discretion"
                ></textarea>
              </div>
              <sub className="m-0">Task Dead Line</sub>
              <div className="input-div mt-0">
                <label htmlFor="task-name">
                  <FaCalendarDay />
                </label>
                <input
                  type="datetime-local"
                  id="task-name"
                  placeholder="Dead Line"
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
        </div>
        <div className="col-md-6">
          <b className="d-block my-2">
            {" "}
            <FaTasks />
            Tasks
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
                    <p>{description}</p>
                    <span className="d-flex justify-content-between">
                      <i className="border">
                        <b>set :</b> {setDate}
                      </i>
                      <i className="border">
                        <b>dead line :</b> {deadLine}
                      </i>
                    </span>
                    <div className="icon-div">
                      <FaCheckDouble />
                      <FaTrash />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
