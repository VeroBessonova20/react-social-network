import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profile: {
      posts: [
        {
          id: 1,
          posts: 'Hi',
          countLike: 1,
        },
        {
          id: 2,
          posts: 'Hello',
          countLike: 0,
        },
      ],
      newPostText: 'newPostText'
    },
    dialogPage: {
      dialogs: [
        {id: 1,  name: 'Elena'},
        {id: 2,  name: 'Ivan'},
        {id: 3,  name: 'Olga'},
        {id: 4,  name: 'Evgen'},
        {id: 5,  name: 'Nika'},
      ],
      messages: [
        {id: 1, message: 'Привет!'},
        {id: 2, message: 'Как дела?'},
        {id: 3, message: 'Чем занят?'},
        {id: 4, message: 'Что нового?'},
      ],
      newMessageBody: ''
    },
    sidebar: {
      activeFriends: [
        {
          id: 1,
          name: 'Elena',
        },
        {
          id: 2,
          name: 'Ivan',
          messages: []
        },
        {
          id: 3,
          name: 'Olga',
          messages: []
        }
      ]
    }
  },
   _callSubscriber () {
    console.log('renderEntireTree')
  },

  subscribe (observer) {
    this._callSubscriber = observer
  },
  getState () {
    return this._state
  },
  dispatch (action) {

    this._state.profile = profileReducer(this._state.profile, action)
    this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state);
  }
};

export default store
window.initState = store