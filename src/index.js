import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StoreContext, {Provider} from "./StoreContext";


let renderEntireTree = (state) => {
  ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>
    , document.getElementById('root')
    
  );
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

