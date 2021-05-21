import { connect } from "react-redux";
import React from "react";

function Filter() {
    return (
        <React.Fragment>
            <button>All</button>
            <button>Finished tasks</button>
            <button>Task not finished</button>
            <br />
        </React.Fragment>
    );
}

export default connect()(Filter);
