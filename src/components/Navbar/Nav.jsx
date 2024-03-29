import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';
import FriendsContainer from '../Friends/FriendsContainer';

const Nav = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/Profile">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Dialogs">Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/News">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Users">Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Music">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Settings">Settings</NavLink>
            </div>
            <hr className={s.line}></hr>
            <div className={s.item}>
                <NavLink to="/Friends"><FriendsContainer /></NavLink>
            </div>
        </nav>
    )
}

export default Nav;