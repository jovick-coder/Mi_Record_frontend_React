import React from "react";
import AnyChart from "anychart-react/dist/anychart-react";

export function ProjectReportChat({ type, data, title }) {
  const complexSettings = {
    minWidth: "240px",
    width: "50%",
    height: "100%",
  };
  return (
    <AnyChart type={type} data={data} title={title} {...complexSettings} />
  );
}
export function FinanceReportChat({ type, data, title }) {
  const complexSettings = {
    minWidth: "240px",
    width: "50%",
    height: "100%",
  };
  return (
    <AnyChart type={type} data={data} title={title} {...complexSettings} />
  );
}
