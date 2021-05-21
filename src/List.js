import { connect } from "react-redux";
import React from "react";

function List({ items, dispatch }) {
    return (
        <ul>
            {items.map((item, index) => {
                return (
                    <React.Fragment>
                        <div className={`${index % 2 === 0 ? "light" : ""}`}>
                            <li className="clear" key={item.id.toString()}>
                                {item.id}: {item.text} -{" "}
                                {new Date(item.timestamp).toLocaleTimeString()}
                            </li>
                            <button
                                className="red"
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
                            <button
                                className={`${item.finish ? "green" : "red"}`}
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
                        </div>
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
