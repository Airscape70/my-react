import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestUsers, getFollow, getUnfollow } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from '../../components/common/preloader/Preloader';
import { getCurrentPage, getFetching, getFollowingInProgress, getPageSize, getTotalCount, getUsers } from "../../redux/users-selectors";


const UsersContainer = (props) => {



  useEffect(() => {
    props.requestUsers(props.currentPage, props.pageSize);
  }, [props.currentPage])

  return (
    props.isFetching ? <Preloader /> : null,
    <Users totalCount={props.totalCount}
      pageSize={props.pageSize}
      currentPage={props.currentPage}
      onPageChanged={props.requestUsers}
      follow={props.getFollow}
      unfollow={props.getUnfollow}
      users={props.users}
      followingInProgress={props.followingInProgress}
      setIsFollowingProgress={props.setIsFollowingProgress} />
  )
}


let mapStateToProps = (state) => ({

  users: getUsers(state),
  pageSize: getPageSize(state),
  totalCount: getTotalCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getFetching(state),
  followingInProgress: getFollowingInProgress(state)
})

export default connect(mapStateToProps, { requestUsers, getFollow, getUnfollow })
  (UsersContainer);
