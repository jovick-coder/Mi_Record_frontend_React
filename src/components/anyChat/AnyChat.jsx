import React from "react";
import AnyChart from "anychart-react/dist/anychart-react";
import "./AnyChart.css";

export function ProjectReportChat({ type, data, title }) {
  const otherAttributes = {
    minWidth: "240px",
    width: "50%",
    height: "100%",
  };
  return (
    <AnyChart type={type} data={data} title={title} {...otherAttributes} />
  );
}
export function FinanceReportChat({ type, data, title }) {
  const otherAttributes = {
    minWidth: "240px",
    width: "50%",
    height: "100%",
  };
  return (
    <AnyChart type={type} data={data} title={title} {...otherAttributes} />
  );
}
