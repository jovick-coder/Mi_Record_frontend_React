import React from "react";
import "./ProjectPage.css";

function ProjectPage() {
  return (
    <div className="main-dashboard-page">
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
              <i className="fas fa-briefcase"></i> Projects Report
            </button>
          </div>
        </div>
      </div>
      <div className="full-main-card main-card">
        <div className=" d-flex justify-content-between">
          <b className="mx-3 my-auto">
            <i className="fas fa-folder-plus"></i> New Project
          </b>

          <label htmlFor="add-project" className="mx-3 fancy-btn">
            Add
          </label>
        </div>
        <input type="checkbox" id="add-project" style={{ display: "none" }} />
        <div className="row justify-content-around project-form-div-row">
          <div className="col-sm-8">
            <div className="form-div dashboard-form">
              <ProjectFormComponent />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="row">
          <b>
            <i className="fas fa-folder"></i> Projects
            <span id="project-count" className="record-count mx-2"></span>
          </b>
          <div className="d-flex project-show"></div>
        </div>
      </div> */}
    </div>
  );
}

export default ProjectPage;

export function ProjectFormComponent() {
  return (
    <form action="" id="project-form">
      <div className="input-div">
        <label htmlFor="project-name">
          <i className="fas fa-user-tag"></i>
        </label>
        <input type="text" id="project-name" placeholder="Project Name" />
      </div>
      <div className="textarea-div">
        <label htmlFor="discretion" className="text-arear-lable">
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
        <input type="datetime-local" id="upload-date" placeholder="Dead Line" />
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
        <input type="file" id="project-image" placeholder="project-image" />
      </div>
      <div>
        <button type="submit" className="form-btn">
          <i className="fas fa-paper-plane"></i>
          Add Task
        </button>
      </div>
    </form>
  );
}
