import { getAuthUserData } from "./auth-Reducer";

const INITIALIZED_SUCCES = 'app/INITIALIZED_SUCCES';

export type initialStateType = {
    initialized: boolean
};


let initialState: initialStateType = {
    initialized: false
};


const appReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case INITIALIZED_SUCCES: {return {...state, initialized: true};
        };
        default: return state;
    }

}

type initializedSuccesActionType = {
    type: typeof INITIALIZED_SUCCES
}

export const initializedSucces = (): initializedSuccesActionType => ({type: INITIALIZED_SUCCES})


export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSucces());
    })
    
}


export default appReducer;