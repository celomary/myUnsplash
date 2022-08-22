import React from 'react'
import {Navigate} from 'react-router-dom';
import Profile from '../pages/Profile';
import { isLoggedIn } from '../services/auth/auth.services';
const ProfileGuard = () => {
  return (
    isLoggedIn() ? <Profile /> : <Navigate to='/login' />
  )
}

export default ProfileGuard;