import React from 'react';
import { createRoot } from "react-dom/client"; 

import { Provider } from 'react-redux';
import {applyMiddleware,compose} from 'redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import reducers from './reducers';
  

import App from './App';
import './index.css';

const store=createStore(reducers,compose(applyMiddleware(thunk)))

const root=createRoot(document.getElementById("root"))

root.render(
<Provider store={store}><App/></Provider>)