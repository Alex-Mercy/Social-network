const SEND_MESSAGE = 'dialogs/SEND_MESSAGE';

type dialogsType = {
    id: number,
    name: string
}

type messagesType = {
    id: number,
    message: string
}

let initialState = {
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

type initialStateType = typeof initialState;


const dialogsReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, { id: 4, message: action.newMessageBody }],
            }; 
        };
        default:
            return state;
    }
}

type sendMessageType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessage = (newMessageBody: string): sendMessageType => ({
    type: SEND_MESSAGE,
    newMessageBody

})




export default dialogsReducer;