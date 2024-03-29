import React from 'react';
import s from './Post.module.css';
import UserIcon from '../../../../images/pngwing.com.png';

const Post = (props) => {
  return (
    <div>

      <div className={s.item}>
        <img src={ UserIcon } alt="ava"></img>
        {props.message}
          <div>
            <span>like</span> {props.likesCount}
          </div>
      </div>

    </div>
  )
}

export default Post;