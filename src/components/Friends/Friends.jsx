import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend';

const Friends = (props) => {

  let friendInfo = props.friendsPage.myFriends.map(n => <Friend name={n.name} ava={n.ava} />);

  return (
    <div className={s.myFriends}>
      <p> My Friends </p>
      <div className={s.friendsList}>
        { friendInfo }
      </div>
    </div>
  )
}

export default Friends;



