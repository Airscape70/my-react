import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import friendsReducer from "./friends-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {

  _state: {
    profilePage: {
      postData: [
        { id: 1, message: 'Hi, how are you?', likesCount: 0 },
        { id: 2, message: 'bebebebe', likesCount: 100 },
        { id: 3, message: "It's my first post", likesCount: 23 },
        { id: 4, message: "It's my first post", likesCount: 23 }
      ],
      newPostText: ''
    },

    messagesPage: {
      dialogsData: [
        { id: 1, name: 'Ksusha' },
        { id: 2, name: 'Dima' },
        { id: 3, name: 'Andrew' },
        { id: 4, name: 'Pavel' },
        { id: 5, name: 'Mo' },
      ],
      messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'wazuuup?' },
        { id: 3, message: 'yooo' },
        { id: 4, message: 'Pyooo' },
        { id: 5, message: 'Susya lyalya' },
      ],
      newMessageText: ''
    },

    friendsPage: {
      myFriends: [
        { id: 1, name: 'Ksusha', ava: 'https://pikuco.ru/upload/test_stable/522/52297aef53d78bf473ab13748b3fe293.webp' },
        { id: 2, name: 'Dima', ava: 'https://vesti42.ru/wp-content/uploads/2023/08/anime.jpg' },
        { id: 3, name: 'Andrew', ava: 'https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg' },
        { id: 4, name: 'Pavel', ava: 'https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295972133291028.jpg' },
        { id: 5, name: 'Mo', ava: 'https://cs13.pikabu.ru/post_img/2023/02/13/8/1676295806122712757.jpg' },
      ]
    },

    sidebar: {}
  },

  _callSubscriber() {
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
    this._state.friendsPage = friendsReducer(this._state.friendsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  
}
}

export default store;
