import Friends from './Friends';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
  return {
    friendsPage: state.friendsPage
  }
}


const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;