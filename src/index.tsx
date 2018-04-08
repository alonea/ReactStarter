import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/FirstComponent";

ReactDOM.render(
    <Hello author="Rajesh Alonea" framework="React" />,
    document.getElementById("example")
);