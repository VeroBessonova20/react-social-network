const sidebarReducer = (state, action) => {
  switch (action.type) {
    // case UPDATE_POST_MESSAGE_TEXT:
    //   state.newMessageBody = action.newMessageText;
    //   return state;
    // case SEND_MESSAGE:
    //   let newMessageBody = state.newMessageBody;
    //   state.messages.push({id: Date.now(), message: newMessageBody});
    //   state.newMessageBody = '';
    //   return state;
    default:
      return state;
  }
}

export default sidebarReducer