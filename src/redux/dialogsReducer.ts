import { InferActionsTypes } from "./store";

type dialogsType = {
    id: number,
    name: string
}

type messagesType = {
    id: number,
    message: string
}

export type InitialStateType = typeof InitialState;

let InitialState = {
    dialogs: [
        { id: 1, name: 'Max' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Vera' },
        { id: 4, name: 'Vova' },
        { id: 5, name: 'Dima' }
    ] as  Array<dialogsType>,
    messages: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo!" }
    ] as  Array<messagesType>
};




const dialogsReducer = (state = InitialState, action: ActionSType): InitialStateType => {

    switch (action.type) {
        case 'SEND_MESSAGE': {
            return {
                ...state,
                messages: [...state.messages, { id: 4, message: action.newMessageBody }],
            }; 
        };
        default:
            return state;
    }
}

type ActionSType = InferActionsTypes<typeof actions>

export const actions = {
    sendMessage: (newMessageBody: string)=> ({type: 'SEND_MESSAGE',newMessageBody} as const)
}



export default dialogsReducer;