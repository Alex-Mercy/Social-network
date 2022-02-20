import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import AppMUI from './AppMUI';
import {Provider} from "react-redux";
import { BrowserRouter  } from "react-router-dom";

  ReactDOM.render(
    <BrowserRouter basemname={process.env.PUBLIC_URL}>
    <Provider store={store}>
    <AppMUI />
    </Provider>
    </BrowserRouter>
    , document.getElementById('root')
    
  );




