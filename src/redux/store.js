import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'



let store = {
  _state: {

    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 32 },
        { id: 1, message: "It is my first post.", likesCount: 32 }
      ],
      newPostText: 'post'
    },

    dialogsPage: {
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
      newMessageBody: 'message'
    }

  },
  _callSubscriber() { },



  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  }
}


export default store;