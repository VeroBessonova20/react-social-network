const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

const UPDATE_POST_MESSAGE_TEXT = 'UPDATE_POST_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

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
    if (action.type === 'ADD_POST') {
      let newPost = {
        id: this._state.profile.posts.length + 1,
        posts:  this._state.profile.newPostText,
        countLike: 0
      }
      this._state.profile.posts.push(newPost)
      this._state.profile.newPostText = ''
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE_POST_TEXT') {
      this._state.profile.newPostText = action.newPostText
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_POST_MESSAGE_TEXT) {
      this._state.dialogPage.newMessageBody = action.newMessageText
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessageBody = this._state.dialogPage.newMessageBody;
      this._state.dialogPage.messages.push({ id: Date.now(), message: newMessageBody});
      this._state.dialogPage.newMessageBody = '';
      this._callSubscriber(this._state);
    }
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const addUpdateNewPostActionCreator = (text) => ({
    type: UPDATE_POST_TEXT,
    newPostText: text
});

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageCreator = (newMessageText) => ({
  type: UPDATE_POST_MESSAGE_TEXT,
  newMessageText: newMessageText
});

export default store
window.initState = store