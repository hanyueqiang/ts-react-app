import React from "react";
import ReactDom from "react-dom";

// import Hello from "./components/demo/hello";
import HelloClass from "./components/demo/helloClass";

ReactDom.render(
  <HelloClass name="world" />,
  document.querySelectorAll(".app")[0]
);
