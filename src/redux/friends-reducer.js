
const initialState = {
  myFriends: [
    { id: 1, name: 'Ksusha', ava: 'https://pikuco.ru/upload/test_stable/522/52297aef53d78bf473ab13748b3fe293.webp' },
    { id: 2, name: 'Dima', ava: 'https://vesti42.ru/wp-content/uploads/2023/08/anime.jpg' },
    { id: 3, name: 'Andrew', ava: 'https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg' },
    { id: 4, name: 'Pavel', ava: 'https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295972133291028.jpg' },
    { id: 5, name: 'Mo', ava: 'https://cs13.pikabu.ru/post_img/2023/02/13/8/1676295806122712757.jpg' }
  ]
};

const friendsReducer = (state = initialState, action) => {
  return state;
}

export default friendsReducer;