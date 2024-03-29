import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";






let Users = ({ totalCount, pageSize, onPageChanged, currentPage, users, ...props }) => {

  return <div>

    <Paginator totalCount={totalCount} pageSize={pageSize} onPageChanged={onPageChanged} currentPage={currentPage} />

    {
      users.map(u => <User user={u}
        followingInProgress={props.followingInProgress}
        unfollow={props.unfollow}
        follow={props.follow}
        key={u.id}
      />)
    }

  </div>
}
export default Users;