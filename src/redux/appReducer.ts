import { getAuthUserData } from "./auth-Reducer";
import { BaseThunkType, InferActionsTypes } from "./store";

type initialStateType = typeof initialState;

let initialState = {
    initialized: false
};


const appReducer = (state = initialState, action: ActionSType): initialStateType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCES': {return {...state, initialized: true};
        };
        default: return state;
    }
}

type ActionSType = InferActionsTypes<typeof actions>

export const actions = {
    initializedSucces: () => ({type: 'INITIALIZED_SUCCES'} as const )
}

type ThunkType = BaseThunkType<ActionSType>

export const initializeApp = (): ThunkType => {
    return async (dispatch) => {
        let promise = dispatch(getAuthUserData());
        Promise.all([promise])
            .then(() => {
            dispatch(actions.initializedSucces());
        }) 
    }
}


export default appReducer;