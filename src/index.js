import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import { Provider } from "react-redux";
import { createStore } from "redux";
const ADD_ITEMS = "ADD_ITEMS";

let store = createStore(function (state, action) {

  switch (action.type) {
    case ADD_ITEMS:
      return {
        ...state,
        items: [...state.items, action.value]
      }
  }

});


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
