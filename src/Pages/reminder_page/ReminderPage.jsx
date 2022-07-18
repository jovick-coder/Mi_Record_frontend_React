import React from "react";
import "./ReminderPage.css";
import {
  FaCalendarAlt,
  FaCalendarDay,
  FaCheckDouble,
  FaEdit,
  FaPaperPlane,
  FaStickyNote,
  FaStopwatch,
  FaStopwatch20,
  FaTasks,
  FaTrash,
  FaUserTag,
} from "react-icons/fa";
import CountDownComponent from "../../components/countDownComponent/CountDownComponent";
import DataAndTimeComponent from "../../components/dateAndTime/DataAndTimeComponent";
import { ReminderFormComponent } from "../../components/reminderForm/ReminderFormComponent";

function ReminderPage() {
  return (
    <>
      <div className="row my-4">
        <div className="col-md-12 d-flex justify-content-around">
          <div className="my-auto">
            <span className="d-none d-sm-inline">Victor Josiah</span>
            <h1 className="head-text">Reminder</h1>
          </div>
          <div>
            <button className="fancy-btn long-text">
              <FaStopwatch20 />
              Event Countdown
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <DataAndTimeComponent />
          </div>
          {/* count down clock */}
          <div className="col-md-6">
            <CountDownComponent />
          </div>
        </div>
      </div>

      <div className="container my-4">
        <div className="row">
          <div className="col-6">
            <div className="d-flex justify-content-around">
              <ReminderFormComponent />
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-around">
              <ReminderFormComponent />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="main-card full-main-card">
            <b>
              <FaCalendarAlt /> Task form
            </b>
            <div className="row">
              <div className="col-md-6">
                <div className="form-div dashboard-form">
                  <form action="">
                    <div className="input-div">
                      <label htmlFor="task-name">
                        <FaUserTag />
                      </label>
                      <input
                        type="text"
                        id="task-name"
                        placeholder="Task Name"
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
                    <li className="task-list">
                      <b>Task Name</b>
                      <p>Task Discretion</p>
                      <span className="d-flex justify-content-between">
                        <i>
                          <b>set :</b> Date
                        </i>
                        <i>
                          <b>dead line :</b> Date
                        </i>
                      </span>
                      <div className="icon-div">
                        <FaCheckDouble />
                        <FaTrash />
                      </div>
                    </li>
                    <li className="task-list">
                      <b>Task Name</b>
                      <p>Task Discretion</p>
                      <span className="d-flex justify-content-between">
                        <i>
                          <b>set :</b> Date
                        </i>
                        <i>
                          <b>dead line :</b> Date
                        </i>
                      </span>
                      <div className="icon-div">
                        <FaCheckDouble />
                        <FaTrash />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="main-card full-main-card">
            <b>
              <FaCalendarAlt />
              Event reminder form
            </b>
            <div className="row">
              <div className="col-md-6">
                <div className="form-div dashboard-form">
                  <form action="">
                    <div className="input-div">
                      <label htmlFor="Event-name">
                        <FaUserTag />
                      </label>
                      <input
                        type="text"
                        id="Event-name"
                        placeholder="Event Name"
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
                        placeholder="Event Discretion"
                      ></textarea>
                    </div>
                    <sub className="m-0">Event Date&Time</sub>
                    <div className="input-div mt-0">
                      <label htmlFor="Event-name">
                        <FaCalendarDay />
                      </label>
                      <input
                        type="datetime-local"
                        id="Event-name"
                        placeholder="Dead Line"
                      />
                    </div>
                    <div>
                      <button className="form-btn">
                        <FaPaperPlane />
                        Add Event
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <b className="d-block my-2">
                  {" "}
                  <FaTasks />
                  Events
                </b>
                <div className="reminder-event-div">
                  <ul>
                    <li className="event-list">
                      <b>Event Name</b>
                      <p>Event Discretion</p>
                      <span className="d-flex justify-content-between">
                        {/* <!-- <i><b>set :</b> Date</i> --> */}
                        <i>
                          <b>Event Date & time :</b> Date
                        </i>
                      </span>
                      <div className="icon-div">
                        <FaEdit />
                        <FaCheckDouble />
                        <FaTrash />
                      </div>
                    </li>
                    <li className="event-list">
                      <b>Event Name</b>
                      <p>Event Discretion</p>
                      <span className="d-flex justify-content-between">
                        {/* <!-- <i><b>set :</b> Date</i> --> */}
                        <i>
                          <b>Event Date & time :</b> Date
                        </i>
                      </span>
                      <div className="icon-div">
                        <FaEdit />
                        <FaCheckDouble />
                        <FaTrash />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReminderPage;
