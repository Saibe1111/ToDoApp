import Form from "./Form.js";
import List from "./List.js";
import Filter from "./Filter.js";
import React from "react";

function App() {
    return (
        <div className="App">
            <Filter />
            <br />
            <Form />
            <hr />
            <List />
        </div>
    );
}

export default App;
