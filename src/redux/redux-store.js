import { applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import usersReducer from "./usersReducer";
import authReducer from "./auth-Reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});



let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;