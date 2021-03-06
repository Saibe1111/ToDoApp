import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { ADD_ITEMS, REMOVE_ITEMS, CHANGE_FINISH_ITEMS } from "./Action.js"

let id = 0;

let store = createStore(function (state, action) {
    switch (action.type) {
        case ADD_ITEMS:
            id++;
            return {
                ...state,
                items: [
                    ...(state?.items === undefined ? [] : state?.items),
                    {
                        id: id,
                        text: action.value,
                        timestamp: Date.now(),
                        finish: false,
                    },
                ],
            };
        case REMOVE_ITEMS:
            return {
                ...state,
                items: [
                    ...state.items.filter(
                        (item) => item.id !== parseInt(action.buttonId)
                    ),
                ],
            };
        case CHANGE_FINISH_ITEMS:
            const list = [...state.items];
            list.forEach((element) => {
                if (element.id === parseInt(action.buttonId)) {
                    element.finish = !element.finish;
                }
            });

            return {
                ...state,
                items: list,
            };

        default:
            return state;
    }
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
