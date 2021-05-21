import { connect } from "react-redux";
import React from "react";

function List({ items, dispatch }) {
    return (
        <ul>
            {items.map((item) => {
                return (
                    <React.Fragment>
                        <li>
                            {item.id}: {item.text} -{" "}
                            {new Date(item.timestamp).toLocaleTimeString()}
                        </li>
                        <button
                            onClick={function () {
                                const buttonId = item.id;
                                dispatch({
                                    type: "REMOVE_ITEMS",
                                    buttonId,
                                });
                            }}
                        >
                            &#10006;
                        </button>
                        {item.finish ? (
                            <button
                                className="green"
                                onClick={function () {
                                    const buttonId = item.id;
                                    dispatch({
                                        type: "CHANGE_FINISH_ITEMS",
                                        buttonId,
                                    });
                                }}
                            >
                                &#10004;
                            </button>
                        ) : (
                            <button
                                onClick={function () {
                                    const buttonId = item.id;
                                    dispatch({
                                        type: "CHANGE_FINISH_ITEMS",
                                        buttonId,
                                    });
                                }}
                            >
                                &#10004;
                            </button>
                        )}
                    </React.Fragment>
                );
            })}
        </ul>
    );
}

const mapStateToProps = (state, { dispatch }) => {
    return {
        items: state?.items === undefined ? [] : state?.items,
        dispatch: dispatch,
    };
};

export default connect(mapStateToProps)(List);
