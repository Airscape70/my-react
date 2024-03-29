import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  return <header className={s.header}>
    <img src='https://img.freepik.com/free-vector/vintage-monochrome-serious-russian-bear_225004-583.jpg?w=740&t=st=1703147561~exp=1703148161~hmac=18bd6194e9c1b3dbf0db1d4523b710427f5b8e344c5128e22f2d624930ff41f8' />
    <div className={s.loginBlock}>
      {props.isAuth 
      ? <div> {props.login} - <button onClick={props.logout}>Logout</button> </div> 
      : <NavLink to = {'/login'}>Login</NavLink>}
      
    </div>
  </header>
}

export default Header;