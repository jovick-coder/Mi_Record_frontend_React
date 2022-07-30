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
import { UserContext } from "../../context/userContext";

function HomePage() {
  // social link context; to map out links
  const { socialLinks } = useContext(SocialLinksContext);

  const { copyLinkFunction, userAccountInformation } = useContext(UserContext);

  const userName = userAccountInformation[0].fullName;

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
          <div className="col-md-12">
            <div className="ms-2">
              <span className="d-none d-sm-inline">{userName}</span>
              <h1 className="head-text">Dashboard</h1>
            </div>
          </div>
        </div>

        <div
          className="row top-card"
          style={projectCount ? { height: "auto" } : null}
          onClick={() => setProjectCount(!projectCount)}
        >
          <div className="col-12 ms-3">
            <b className="card-name">Project Count</b>
          </div>
          <div className="col-sm-4">
            <MainCard>
              <b>Pending</b>
              <p>0</p>
            </MainCard>
          </div>
          <div className="col-sm-4">
            <MainCard>
              <b>InProgress</b>
              <p>0</p>
            </MainCard>
          </div>
          <div className="col-sm-4">
            <MainCard>
              <b>Complected</b>
              <p>0</p>
            </MainCard>
          </div>
        </div>
        <div
          className="row top-card"
          style={fianceRecord ? { height: "auto" } : null}
          onClick={() => setFianceRecord(!fianceRecord)}
        >
          <div className="col-12 ms-3">
            <b className="card-name">Fiance Record</b>
          </div>
          <div className="col-sm-4">
            <MainCard>
              <b>Income</b>
              <p>0</p>
            </MainCard>
          </div>
          <div className="col-sm-4">
            <MainCard>
              <b>Expenses</b>
              <p>0</p>
            </MainCard>
          </div>
          <div className="col-sm-4">
            <MainCard>
              <b> Budget</b>
              <p>0</p>
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
                {socialLinks.length === 0 ? (
                  <>
                    No Link Found
                    <br />
                    <Link to={"/dashboard/social-links"}>Add one</Link>
                  </>
                ) : (
                  <>
                    {" "}
                    {socialLinks.map((socialLink) => {
                      const { linkId, name, icon, link } = socialLink;

                      return (
                        <>
                          {link !== "" ? (
                            <li key={linkId}>
                              <span>
                                {icon} {name}
                              </span>
                              <span
                                className="icon-set"
                                onClick={() => {
                                  copyLinkFunction(link);
                                }}
                              >
                                <FaClipboard />
                              </span>
                            </li>
                          ) : null}
                        </>
                      );
                    })}
                  </>
                )}
              </ol>
            </div>
          </div>
          <div className="col-md-6 dashboard-todo-col">
            <TodoComponent />
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
