import Preloader from '../common/preloader/Preloader';
import Avatar from './Avatar/Avatar';
import MyPostsContainer from './MyPosts/myPostsContainer';
import s from './Profile.module.css';

const Profile = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.profile}>
            <Avatar profile ={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;