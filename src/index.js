import React from "react";
import ReactDOM from "react-dom";
import CalendarWrapper from "./componentWrapers/calendarWrapper";

const App = () => {
    return (
        <CalendarWrapper />
    );
};

ReactDOM.render(<App />, document.getElementById("mount"));
