import React, { useContext, useEffect, useState } from "react";
import { BsFilePdf } from "react-icons/bs";
import { FaClipboard, FaEdit, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FinanceReportChat,
  ProjectReportChat,
} from "../../components/anyChat/AnyChat";
import MainCard from "../../components/mainCard/mainCard";
import TodoComponent from "../../components/todoComponent/TodoComponent";
import { SocialLinksContext } from "../../context/SocialLinksContext";

function HomePage() {
  // social link context; to map out links
  const { socialLinks } = useContext(SocialLinksContext);

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
        <div className="row my-4">
          <div className="col-md-12 d-flex justify-content-around">
            <div className="my-auto">
              <span className="d-none d-sm-inline">Victor Josiah</span>
              <h1 className="head-text">Dashboard</h1>
            </div>
            <div>
              <button className="fancy-btn">
                <i className="fas fa-file-pdf"></i> Report
                <BsFilePdf />
              </button>
            </div>
          </div>
        </div>

        <div
          className="row top-card"
          style={projectCount ? { height: "auto" } : null}
          onClick={() => setProjectCount(!projectCount)}
          onMouseOver={() => setProjectCount(true)}
          onMouseOut={() => setProjectCount(false)}
        >
          <div className="col-12 ms-3">
            <b className="card-name">Project Count</b>
          </div>
          <div className="col-sm-4">
            <MainCard>
              <b>
                {/* <FaTasks /> */}
                Pending
              </b>
              <p>200</p>
            </MainCard>
          </div>
          <div className="col-sm-4">
            <MainCard>
              <b>
                {/* <FaProjectDiagram /> */}
                InProgress
              </b>
              <p>200</p>
            </MainCard>
          </div>
          <div className="col-sm-4">
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
          className="row top-card"
          style={fianceRecord ? { height: "auto" } : null}
          onClick={() => setFianceRecord(!fianceRecord)}
          onMouseOver={() => setFianceRecord(true)}
          onMouseOut={() => setFianceRecord(false)}
        >
          <div className="col-12 ms-3">
            <b className="card-name">Fiance Record</b>
          </div>
          <div className="col-sm-4">
            <MainCard>
              <b>
                {/* <FaTasks /> */}
                Income
              </b>
              <p>200</p>
            </MainCard>
          </div>
          <div className="col-sm-4">
            <MainCard>
              <b>
                {/* <FaProjectDiagram /> */}
                Expenses
              </b>
              <p>200</p>
            </MainCard>
          </div>
          <div className="col-sm-4">
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
        <div className="row">
          <div className="col-md-6">
            <div className="main-card social-main-card">
              <div className="d-flex justify-content-between">
                <b>
                  <FaLink /> social Link
                </b>
                <Link to="/dashboard/social-links">
                  <FaEdit />
                </Link>
              </div>
              <ol className="list-item">
                {socialLinks.map((socialLink) => {
                  const { linkId, name, icon, link } = socialLink;
                  return (
                    <li key={linkId}>
                      <span>
                        {icon} {name}
                      </span>
                      <span className="icon-set">
                        <FaClipboard />
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
          <div className="col-md-6 dashboard-todo-col">
            <div className="main-card">
              <b>
                {" "}
                <i className="fas fa-clipboard-list"></i> Todo
              </b>
              <TodoComponent />
            </div>
          </div>
        </div>
      </div>
      <div className="chat-row">
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
