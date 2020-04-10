import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import { getWidgetStyles } from "./lib/utils";

getWidgetStyles();
const s = document.createElement("style");
s.type = 'text/css'
document.body.append(s);

ReactDOM.render(<App s={s}/>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
