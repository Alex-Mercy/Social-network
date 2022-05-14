import { Action, applyMiddleware, combineReducers, compose, createStore, Dispatch} from "redux";
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import usersReducer from "./usersReducer";
import authReducer from "./auth-Reducer";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import appReducer from "./appReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

type rootReducerType = typeof rootReducer;
export type StateType = ReturnType<rootReducerType>

export type InferActionsTypes<T> = T extends {[key: string]: (...args: any[])=> infer U} ? U : never

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, StateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunkMiddleware)
  ));
// @ts-ignore
  window.__store__ = store;


export default store;