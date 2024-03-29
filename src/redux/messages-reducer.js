const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
  dialogsData: [
    { id: 1, name: 'Ksusha', ava: 'https://pikuco.ru/upload/test_stable/522/52297aef53d78bf473ab13748b3fe293.webp' },
    { id: 2, name: 'Dima', ava: 'https://vesti42.ru/wp-content/uploads/2023/08/anime.jpg' },
    { id: 3, name: 'Andrew', ava: 'https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg' },
    { id: 4, name: 'Pavel', ava: 'https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295972133291028.jpg' },
    { id: 5, name: 'Mo' , ava: 'https://cs13.pikabu.ru/post_img/2023/02/13/8/1676295806122712757.jpg'}
  ],
  messagesData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'wazuuup?' },
    { id: 3, message: 'yooo' },
    { id: 4, message: 'Pyooo' },
    { id: 5, message: 'lyalya'},
  ]
};

const messagesReducer = (state = initialState, action) => {


  switch (action.type) {

    case ADD_MESSAGE:
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: action.newMessage }]
      };


    default:
      return state;
  }
}




export const addMessage = (newMessage) =>
  ({ type: ADD_MESSAGE, newMessage})




export default messagesReducer;