import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'

let initialState = {
  postData: [
    { id: 1, message: 'Hi, how are you?', likesCount: 0 },
    { id: 2, message: 'bebebebe', likesCount: 100 },
    { id: 3, message: "It's my first post", likesCount: 23 }
  ],
  profile: null,
  status: null
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      return {
          ...state,
          postData: [...state.postData, {id: 4, message: action.newPost, likesCount: 0}]
      }
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case SET_USER_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }



    default:
      return state;  
  }
}


export const addPost = (newPost) =>  
({type: ADD_POST, newPost})

export const setUserProfile = (profile) =>
({type: SET_USER_PROFILE, profile})

export const setUserStatus = (status) =>
({type: SET_USER_STATUS, status})





export const getUserProfile = (userId) => async (dispatch) => {
  let data = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(data));
  };
export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
  .then(response => {
  dispatch(setUserStatus(response.data));
  });
}
export const updateUserStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
  .then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  });
}





export default profileReducer;