import React, { Suspense, useEffect } from "react";
import { Provider, connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { initializeApp } from './redux/app-reducer'

//import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";

import FriendsContainer from "./components/Friends/FriendsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Music from "./components/Music/Music";
import Nav from './components/Navbar/Nav';
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import Preloader from "./components/common/preloader/Preloader";
import store from './redux/redux-store.js';




const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

const App = (props) => {


    useEffect(() => {
        props.initializeApp();
    },)


    // if (!props.initialized) {
    //     return <Preloader />
    // }

    return (
        <div className='app-wrapper'>
            <HeaderContainer />
            <Nav />
            <div className='app-wrapper-content'>
                <Suspense fallback={<Preloader />}>
                    <Routes>
                        <Route path="/profile/:userId?" element={<ProfileContainer />} />
                        <Route path="/dialogs" element={<DialogsContainer />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/music" element={<Music />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/users" element={<UsersContainer />} />
                        <Route path="/friends" element={<FriendsContainer />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
}



const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, { initializeApp }) (App);

const SamuraiJSApp = (props) => {
    return <React.StrictMode>

        <Provider store={store}>
            <BrowserRouter> <AppContainer /> </BrowserRouter>
        </Provider>

    </React.StrictMode>

}

export default SamuraiJSApp;