const UPDATE_POST_MESSAGE_TEXT = 'UPDATE_POST_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_POST_MESSAGE_TEXT:
      state.newMessageBody = action.newMessageText;
      return state;
    case SEND_MESSAGE:
      let newMessageBody = state.newMessageBody;
      state.messages.push({id: Date.now(), message: newMessageBody});
      state.newMessageBody = '';
      return state;
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageCreator = (newMessageText) => ({
  type: UPDATE_POST_MESSAGE_TEXT,
  newMessageText: newMessageText
});

export default dialogReducer;