import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import {AppWrapped} from "./Components/App/App";
import "./services/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppWrapped />);
