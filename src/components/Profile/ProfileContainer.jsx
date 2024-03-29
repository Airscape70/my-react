import React, { useEffect, useState } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
import { useNavigate, useParams } from 'react-router-dom';
import { getProfile, getStatus } from '../../redux/profile-selectors';
import { getAuthorizedUserId, getIsAuth } from '../../redux/Header-selector';


const ProfileContainer = (props) => {
  let params = useParams();
  let navigate = useNavigate();
  let userId = params.userId;
  

  useEffect(() => {
    if (userId === undefined) {
      userId = props.authorizedUserId;
    } if (userId === null) {
      return navigate("/login")
    }

    props.getUserProfile(userId);
    props.getUserStatus(userId);
    }, [params.userId])


        return (
            <Profile {...props} 
            profile={props.profile} 
            status={props.status} 
            updateUserStatus={props.updateUserStatus}/>
    );
   }


let mapStateToProps = (state) => ({
 profile: getProfile(state),
 status: getStatus(state),
 authorizedUserId: getAuthorizedUserId(state),
 isAuth: getIsAuth(state)
});


export default connect (mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus })
(ProfileContainer);
