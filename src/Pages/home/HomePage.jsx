import React, { useEffect, useState } from "react";
import { BsFilePdf } from "react-icons/bs";
import {
  FaClipboard,
  FaEdit,
  FaFacebook,
  FaGithub,
  FaLink,
  FaLinkedinIn,
  FaPaperPlane,
  FaSlack,
  FaTrash,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FinanceReportChat,
  ProjectReportChat,
} from "../../components/anyChat/AnyChat";
import MainCard from "../../components/mainCard/mainCard";

function HomePage() {
  const [projectCount, setProjectCount] = useState(false);
  const [fianceRecord, setFianceRecord] = useState(false);
  useEffect(() => {
    if (projectCount) {
      setFianceRecord(false);
    }
  }, [projectCount]);
  useEffect(() => {
    if (fianceRecord) {
      setProjectCount(false);
    }
  }, [fianceRecord]);
  return (
    <div className="home-page-main">
      <div className="container">
        <div class="row my-4">
          <div class="col-md-12 d-flex justify-content-around">
            <div class="my-auto">
              Victor Josiah
              {/* <h1 class="d-none d-sm-inline head-text">Dashboard</h1> */}
            </div>
            <div>
              <button class="fancy-btn">
                <i class="fas fa-file-pdf"></i> Report
                <BsFilePdf />
              </button>
            </div>
          </div>
        </div>

        <div
          class="row top-card"
          style={projectCount ? { height: "auto" } : null}
          onClick={() => setProjectCount(!projectCount)}
          onMouseOver={() => setProjectCount(true)}
          onMouseOut={() => setProjectCount(false)}
        >
          <div className="col-12 ms-3">
            <b className="card-name">Project Count</b>
          </div>
          <div class="col-sm-4">
            <MainCard>
              <b>
                {/* <FaTasks /> */}
                Pending
              </b>
              <p>200</p>
            </MainCard>
          </div>
          <div class="col-sm-4">
            <MainCard>
              <b>
                {/* <FaProjectDiagram /> */}
                InProgress
              </b>
              <p>200</p>
            </MainCard>
          </div>
          <div class="col-sm-4">
            <MainCard>
              <b>
                {/* <FaCoins /> */}
                Complected
              </b>
              <p>200</p>
            </MainCard>
          </div>
        </div>
        <div
          class="row top-card"
          style={fianceRecord ? { height: "auto" } : null}
          onClick={() => setFianceRecord(!fianceRecord)}
          onMouseOver={() => setFianceRecord(true)}
          onMouseOut={() => setFianceRecord(false)}
        >
          <div className="col-12 ms-3">
            <b className="card-name">Fiance Record</b>
          </div>
          <div class="col-sm-4">
            <MainCard>
              <b>
                {/* <FaTasks /> */}
                Income
              </b>
              <p>200</p>
            </MainCard>
          </div>
          <div class="col-sm-4">
            <MainCard>
              <b>
                {/* <FaProjectDiagram /> */}
                Expenses
              </b>
              <p>200</p>
            </MainCard>
          </div>
          <div class="col-sm-4">
            <MainCard>
              <b>
                {" "}
                {/* <FaCoins /> */}
                Budget
              </b>
              <p>200</p>
            </MainCard>
          </div>
        </div>
      </div>

      <div className="container-lg">
        <div class="row">
          <div class="col-md-6">
            <div class="main-card social-main-card">
              <div class="d-flex justify-content-between">
                {" "}
                <b>
                  <FaLink /> social Link
                </b>
                <FaEdit />
              </div>
              <ol class="list-item">
                <li>
                  <span>
                    <FaFacebook /> FaceBook
                  </span>
                  <span class="icon-set">
                    <FaClipboard />
                  </span>
                </li>
                <li>
                  <span>
                    <FaSlack /> Slack
                  </span>
                  <span class="icon-set">
                    <FaClipboard />
                  </span>
                </li>
                <li>
                  <span>
                    <FaTwitter /> Twitter
                  </span>
                  <span class="icon-set">
                    <FaClipboard />
                  </span>
                </li>
                <li>
                  <span>
                    <FaLinkedinIn /> Linkedin
                  </span>
                  <span class="icon-set">
                    <FaClipboard />
                  </span>
                </li>
                <li>
                  <span>
                    <FaYoutube /> Youtube
                  </span>
                  <span class="icon-set">
                    <FaClipboard />
                  </span>
                </li>
                <li>
                  <span>
                    <FaGithub /> GitHub
                  </span>
                  <span class="icon-set">
                    <FaClipboard />
                  </span>
                </li>
              </ol>
            </div>
          </div>
          <div class="col-md-6 dashboard-todo-col">
            <div class="main-card">
              <b>
                {" "}
                <i class="fas fa-clipboard-list"></i> Todo
              </b>
              <div class="todo-div">
                <ol class="list-item" id="todo-list">
                  <li class="completed">
                    <span class="form-check form-check-flat">
                      <label class="done-check">
                        ToDo list functionality
                        <input type="checkbox" class="checkbox" checked />
                        <span class="checkmark"></span>
                      </label>
                    </span>
                    <FaTrash className="my-auto trash" />
                  </li>
                  <li>
                    <span class="form-check form-check-flat">
                      <label class="done-check">
                        Design other pages
                        <input type="checkbox" class="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                    </span>
                    <FaTrash className="my-auto trash" />
                  </li>
                  <li>
                    <span class="form-check form-check-flat">
                      <label class="done-check">
                        Learn Node Js
                        <input type="checkbox" class="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                    </span>
                    <FaTrash className="my-auto trash" />
                  </li>
                  <li>
                    <span class="form-check form-check-flat">
                      <label class="done-check">
                        Learn Mongo
                        <input type="checkbox" class="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                    </span>
                    <FaTrash className="my-auto trash" />
                  </li>
                  <li>
                    <span class="form-check form-check-flat">
                      <label class="done-check">
                        Develope the Backend
                        <input type="checkbox" class="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                    </span>
                    <FaTrash className="my-auto trash" />
                  </li>
                </ol>
                <form action="" class="dashboard-todo-send-form">
                  <input
                    type="text"
                    id="todo-list-input"
                    placeholder="Add Todo"
                  />
                  <button id="todo-list-add-btn">
                    <FaPaperPlane />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="chat-row">
        <div className="chat-div">
          <ProjectReportChat
            type="pie3d"
            data={[
              ["pending", 5],
              ["In Progress", 2],
              ["Complected", 10],
            ]}
            title="Project Report"
          />
          <FinanceReportChat
            type="bar"
            data={[
              ["budget", 5000],
              ["Income", 10000],
              ["Expenses", 4000],
            ]}
            title="Finance Report"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
