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
    messages: {
      dataMessages: [
        {
          id: 1,
          name: 'Elena',
          messages: [
            { id: 1, message: 'Привет!'},
            { id: 2, message: 'Как дела?'},
            { id: 3, message: 'Чем занят?'},
            { id: 4, message: 'Что нового?'},
          ]
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
        },
        {
          id: 4,
          name: 'Evgen',
          messages: []
        },
        {
          id: 5,
          name: 'Nika',
          messages: []
        }
      ]
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
    debugger
    return this._state
  },

  // addPosts () {
  //   let newPost = {
  //     id: this._state.profile.posts.length + 1,
  //     posts:  this._state.profile.newPostText,
  //     countLike: 0
  //   }
  //   this._state.profile.posts.push(newPost)
  //   this._state.profile.newPostText = ''
  //   this._callSubscriber(this._state, this.addPosts, this.updatePostText);
  // }, // меняют стейт
  // updatePostText (newPostText) {
  //   this._state.profile.newPostText = newPostText
  //   this._callSubscriber(this._state, this.addPosts, this.updatePostText);
  // }, // меняют стейт
  dispatch (action) {
    if (action.type === 'ADD POST') {
      let newPost = {
        id: this._state.profile.posts.length + 1,
        posts:  this._state.profile.newPostText,
        countLike: 0
      }
      this._state.profile.posts.push(newPost)
      this._state.profile.newPostText = ''
      this._callSubscriber(this._state, this.addPosts, this.updatePostText);
    } else if (action.type === 'UPDATE POST TEXT') {
      this._state.profile.newPostText = action.newPostText
      this._callSubscriber(this._state, this.addPosts, this.updatePostText);
    } else {

    }
  }
}

export default store
window.initState = store