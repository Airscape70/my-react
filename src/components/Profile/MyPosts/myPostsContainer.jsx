import { addPost } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData
  }
}


const MyPostsContainer = connect(mapStateToProps, { addPost } )(MyPosts);

export default MyPostsContainer;