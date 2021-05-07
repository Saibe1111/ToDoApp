import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from "react-redux";
import { createStore } from "redux";
const ADD_ITEMS = "ADD_ITEMS";
const REMOVE_ITEMS = "REMOVE_ITEMS";
let id = 0;


let store = createStore(function (state, action) {

  switch (action.type) {
    case ADD_ITEMS:
      id++;
      return {
        ...state,
        items: [...state?.items === undefined ? [] : state?.items, {id: id, text: action.value, timestamp: Date.now()}],
      }
    case REMOVE_ITEMS:

      const itemList = state?.items;

      itemList.forEach(element => {
        if(element.id === action.value){
          itemList.remove(element);
        }
      });

      return {
        ...state,
        items: [],
      }
    default:
      return state;
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
