const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: state.posts.length + 1,
        posts:  state.newPostText,
        countLike: 0
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_POST_TEXT:
      state.newPostText = action.newPostText;
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST});

export const addUpdateNewPostActionCreator = (text) => ({
  type: UPDATE_POST_TEXT,
  newPostText: text
});

export default profileReducer;