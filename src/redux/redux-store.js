import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux";
import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import friendsReducer from "./friends-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import {thunk}  from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import appReducer from "./app-reducer";


let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  friendsPage: friendsReducer,
  sidebar: sidebarReducer, 
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers, composeEnhancers( applyMiddleware(thunk)));

export default store;