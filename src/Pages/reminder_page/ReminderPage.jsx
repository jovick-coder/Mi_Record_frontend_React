import React from "react";
import CountDownComponent from "../../components/countDownComponent/CountDownComponent";
import DataAndTimeComponent from "../../components/dateAndTime/DataAndTimeComponent";

function ReminderPage() {
  return (
    <>
      <div class="row my-4">
        <div class="col-md-12 d-flex justify-content-around">
          <div class="my-auto">
            <span class="d-none d-sm-inline">Victor Josiah</span>
            <h1 class="head-text">Reminder</h1>
          </div>
          <div>
            <button class="fancy-btn long-text">
              <i class="fas fa-stopwatch-20"></i> Event Countdown
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div class="row">
          <div class="col-md-6">
            <DataAndTimeComponent />
          </div>
          {/* count down clock */}
          <div class="col-md-6">
            <CountDownComponent />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="main-card full-main-card">
            <b>
              <i class="far fa-calendar-alt" aria-hidden="true"></i> Task form
            </b>
            <div class="row">
              <div class="col-md-6">
                <div class="form-div dashboard-form">
                  <form action="">
                    <div class="input-div">
                      <label for="task-name">
                        <i class="fas fa-user-tag"></i>
                      </label>
                      <input
                        type="text"
                        id="task-name"
                        placeholder="Task Name"
                      />
                    </div>
                    <div class="textarea-div">
                      <label for="password" class="text-arear-lable">
                        <i class="fas fa-sticky-note"></i>
                      </label>
                      <textarea
                        name=""
                        id="discribtion"
                        cols="30"
                        rows="3"
                        placeholder="Task Discretion"
                      ></textarea>
                    </div>
                    <sub class="m-0">Task Dead Line</sub>
                    <div class="input-div mt-0">
                      <label for="task-name">
                        <i class="fas fa-calendar-day"></i>
                      </label>
                      <input
                        type="datetime-local"
                        id="task-name"
                        placeholder="Dead Line"
                      />
                    </div>
                    <div>
                      <button class="form-btn">
                        <i class="fas fa-paper-plane"></i>
                        Add Task
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-md-6">
                <b class="d-block my-2">
                  {" "}
                  <i class="fas fa-tasks"></i> Tasks
                </b>
                <div class="reminder-task-div">
                  <ul>
                    <li class="task-list">
                      <b>Task Name</b>
                      <p>Task Discretion</p>
                      <span class="d-flex justify-content-between">
                        <i>
                          <b>set :</b> Date
                        </i>
                        <i>
                          <b>dead line :</b> Date
                        </i>
                      </span>
                      <div class="icon-div">
                        <i class="fas fa-check-double"></i>
                        <i class="fas fa-trash"></i>
                      </div>
                    </li>
                    <li class="task-list">
                      <b>Task Name</b>
                      <p>Task Discretion</p>
                      <span class="d-flex justify-content-between">
                        <i>
                          <b>set :</b> Date
                        </i>
                        <i>
                          <b>dead line :</b> Date
                        </i>
                      </span>
                      <div class="icon-div">
                        <i class="fas fa-check-double"></i>
                        <i class="fas fa-trash"></i>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="main-card full-main-card">
            <b>
              <i class="far fa-calendar-alt" aria-hidden="true"></i> Event
              reminder form
            </b>
            <div class="row">
              <div class="col-md-6">
                <div class="form-div dashboard-form">
                  <form action="">
                    <div class="input-div">
                      <label for="Event-name">
                        <i class="fas fa-user-tag"></i>
                      </label>
                      <input
                        type="text"
                        id="Event-name"
                        placeholder="Event Name"
                      />
                    </div>
                    <div class="textarea-div">
                      <label for="password" class="text-arear-lable">
                        <i class="fas fa-sticky-note"></i>
                      </label>
                      <textarea
                        name=""
                        id="discribtion"
                        cols="30"
                        rows="3"
                        placeholder="Event Discretion"
                      ></textarea>
                    </div>
                    <sub class="m-0">Event Date&Time</sub>
                    <div class="input-div mt-0">
                      <label for="Event-name">
                        <i class="fas fa-calendar-day"></i>
                      </label>
                      <input
                        type="datetime-local"
                        id="Event-name"
                        placeholder="Dead Line"
                      />
                    </div>
                    <div>
                      <button class="form-btn">
                        <i class="fas fa-paper-plane"></i>
                        Add Event
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-md-6">
                <b class="d-block my-2">
                  {" "}
                  <i class="fas fa-task"></i> Events
                </b>
                <div class="reminder-event-div">
                  <ul>
                    <li class="event-list">
                      <b>Event Name</b>
                      <p>Event Discretion</p>
                      <span class="d-flex justify-content-between">
                        {/* <!-- <i><b>set :</b> Date</i> --> */}
                        <i>
                          <b>Event Date & time :</b> Date
                        </i>
                      </span>
                      <div class="icon-div">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-check-double"></i>
                        <i class="fas fa-trash"></i>
                      </div>
                    </li>
                    <li class="event-list">
                      <b>Event Name</b>
                      <p>Event Discretion</p>
                      <span class="d-flex justify-content-between">
                        {/* <!-- <i><b>set :</b> Date</i> --> */}
                        <i>
                          <b>Event Date & time :</b> Date
                        </i>
                      </span>
                      <div class="icon-div">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-check-double"></i>
                        <i class="fas fa-trash"></i>
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
