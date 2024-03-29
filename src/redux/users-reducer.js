import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/objects-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_IS_FETCHING = 'SET-IS-FETCHING'
const SET_IS_FOLLOWING_PROGRESS = 'SET-IS-FOLLOWING-PROGRESS'

let initialState = {
  users: [],
  pageSize: 10,
  totalCount: 100,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

  switch (action.type) {

    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
        // users: state.users.map(u => {
        //   if (u.id === action.userId) {
        //     return { ...u, followed: true }
        //   }
        //   return u;
        // })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
      }

    case SET_USERS:
      return {
        ...state,
        users: action.users
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }

    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }

    case SET_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id != action.userId)
      }

    default:
      return state;
  }
}



export const follow = (userId) =>
({ type: FOLLOW, userId });

export const unFollow = (userId) =>
({ type: UNFOLLOW, userId });

export const setUsers = (users) =>
({ type: SET_USERS, users });

export const setCurrentPage = (currentPage) =>
({ type: SET_CURRENT_PAGE, currentPage });

export const setIsFetching = (isFetching) =>
({ type: SET_IS_FETCHING, isFetching });

export const setIsFollowingProgress = (isFetching, userId) =>
({ type: SET_IS_FOLLOWING_PROGRESS, isFetching, userId });




export const requestUsers = (currentPage, pageSize) => {
  
  return (dispatch) => {
    dispatch(setIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(setCurrentPage(currentPage));
      dispatch(setIsFetching(false));
      dispatch(setUsers(data.items));
    });
  }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {

  dispatch(setIsFollowingProgress(true, userId));
  let data = await apiMethod(userId)

      if (data.resultCode == 0) {
      dispatch(actionCreator(userId)) };
      dispatch(setIsFollowingProgress(false, userId));
}

export const getUnfollow = (userId) => {
  
  return async (dispatch) => {
    let apiMethod = usersAPI.getUnfollow.bind(usersAPI);
    let actionCreator = unFollow;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
  }
}

export const getFollow = (userId) => {
  
  return async (dispatch) => {
    let apiMethod = usersAPI.getFollow.bind(usersAPI);
    let actionCreator = follow;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
  }
}


export default usersReducer;