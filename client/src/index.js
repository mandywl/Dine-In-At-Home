import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { UserProvider } from "./utils/UserContext";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById("root")
);
registerServiceWorker();
