const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
    dialogs: [
        { id: 1, name: 'Max' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Vera' },
        { id: 4, name: 'Vova' },
        { id: 5, name: 'Dima' }
    ],
    messages: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo!" }
    ],
    newMessageBody: ''
};


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 4, message: state.newMessageBody }],
            }; 
        };
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body
            };
        };
        default:
            return state;
    }

}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})


export const updateNewMessageBodyActionCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})


export default dialogsReducer;