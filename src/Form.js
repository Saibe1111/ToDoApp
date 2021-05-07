import { connect } from 'react-redux';
import React from 'react';

function Form({ dispatch }) {

    const [value, setValue] = React.useState("");

    return (
        <React.Fragment>
            <input
                type="text"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
            <button
                onClick={function () {
                    dispatch({
                        type: "ADD_ITEM",
                        value,
                    });
                    setValue("");
                }}
            >
                add
            </button>
        </React.Fragment>
    );

}

export default connect()(Form);
