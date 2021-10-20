import React from "react";
import { render } from "react-dom";
import { StoplightProject } from "@stoplight/elements-dev-portal";
import "@stoplight/elements-dev-portal/styles.min.css";

render(
  <StoplightProject projectId="cHJqOjYyNTgw" />,
  // <h1>Stoplight</h1>,
  document.getElementById("app")
);
