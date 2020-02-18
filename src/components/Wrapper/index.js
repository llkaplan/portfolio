import React from "react";
import "./style.css";

function Wrapper(items) {
    return (
        <div id="page-container">
            <div id="content-wrap">
                <div className="container mainContent" {...items} />
            </div>
        </div>

    );
}

export default Wrapper;
  