import React from 'react';
import s from './Friends.module.css';


const Friend = (props) => {

  return (
    <div className={s.myFriends}>
      <img src={props.ava}></img>
      <figcaption>{props.name}</figcaption>
    </div>

  )
}

export default Friend;



