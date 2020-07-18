import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import "./index.css";

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';

import {SmurfsReducer} from './reducers/smurfsReducer';

const store = createStore(SmurfsReducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
