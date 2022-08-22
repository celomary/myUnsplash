import React from 'react';
import '../styles/Header.css';
import logo from '../assets/images/my_unsplash_logo.svg';
import Search from './Search';
import OneButton from './OneButton';
import {useNavigate} from 'react-router-dom';
import { isLoggedIn, logout } from '../services/auth/auth.services';
import { connect } from 'react-redux';
import { allPostsAction } from '../services/actions';
const Header = ({hide, allPostsAction}) => {
  const navigate = useNavigate();
  return (
    <div className='Header'>
        <div className='leftSide'>
            <div className='logo' onClick={
              ()=>{
                navigate('/');
              }
            }>
                <img src={logo} alt='logo my unsplash' />
            </div>
            {
             !hide ? <Search /> : null
            }
        </div>
        <div className='rightSide'>
         {
           isLoggedIn() ?
            <>
              {
                !hide ? 
                <>
                <OneButton text={'Profile'}
                onClick={
                  ()=>{
                    navigate('/profile');
                  }
                }
                />
                <p style={{
                  fontSize: '20px'
                }}>/</p>
                </>: null
              }
                <OneButton text={'Log Out'}
                  onClick={
                    ()=>{
                     logout();
                     setTimeout(()=>{
                      navigate('/');
                     }, 1000);
                    }
                  }
                />
            </>
           :
            <>
                <OneButton
                text={"Log In"}
                onClick={
                  ()=>{
                    navigate('/login');
                  }
                }/>
                <p style={{
                  fontSize: '20px'
                }}>/</p>
                <OneButton
                text={'Sign Up'}
                onClick={
                  ()=>{
                    navigate('/register');
                  }
                }/>
            </>
         }
        </div>
    </div>
  )
}

export default connect(null, {
  allPostsAction
})(Header);