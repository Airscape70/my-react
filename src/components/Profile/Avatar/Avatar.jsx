import React from 'react';
import s from './Avatar.module.css'
import UserIcon from '../../../images/pngwing.com.png';
import Cross from '../../common/preloader/Cross';
import Checkmark from '../../common/preloader/Checkmark';
import vk from '../../../images/free-icon-vkontakte-4494490.png'
import youtube from '../../../images/free-icon-youtube-4494467.png'
import facebook from '../../../images/free-icon-facebook-4494464.png'
import github from '../../../images/free-icon-github-3291695.png'
import twitter from '../../../images/free-icon-twitter-2111738.png'
import instagram from '../../../images/free-icon-instagram-1384015.png'
import StatusInfoWithHooks from './StatusInfoWithHooks';


const Avatar = (props) => {
  return (
    <div>
      <div>
      </div>
      <div className={s.avatar}>
        <img className={s.ava} src={props.profile.photos.large != null ? props.profile.photos.large : UserIcon} alt="avatar"></img>
        <div className={s.description}>
          <h2 className={s.fullName}>{props.profile.fullName}</h2>
          <div className={s.status}>
            {props.profile.lookingForAJob ? <Cross /> : <Checkmark />}
            <StatusInfoWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
          </div>
        </div>
        <ul className={s.contacts}>
          <li>github: <a href={props.profile.contacts.github} ><img src={github} /></a></li>
          <li>vk: <a href={props.profile.contacts.vk} ><img src={vk} /></a></li>
          <li>facebook: <a href={props.profile.contacts.facebook}><img src={facebook} /></a></li>
          <li>instagram: <a href={props.profile.contacts.instagram}><img src={instagram} /></a></li>
          <li>twitter: <a href={props.profile.contacts.twitter}><img src={twitter} /></a></li>
          <li>youtube: <a href={props.profile.contacts.youtube}><img src={youtube} /></a></li>
        </ul>
      </div>
    </div>
  );
}

export default Avatar;