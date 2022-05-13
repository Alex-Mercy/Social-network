import store from "./redux/store";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import { BrowserRouter  } from "react-router-dom";

  ReactDOM.render(
    <BrowserRouter basemname={process.env.PUBLIC_URL}>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
    , document.getElementById('root')
    
  );




