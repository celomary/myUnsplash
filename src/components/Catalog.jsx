import React, {useState} from 'react'
import Picture from './Picture';
import { ImageList, ImageListItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/Catalog.css';
import {AiFillCaretLeft} from 'react-icons/ai';
import { connect } from 'react-redux';
const Catalog = ({
    search,
    posts
}) => {
    const navigate = useNavigate();
  return (
    posts.length ? <div className='Catalog'>
        <ImageList variant="masonry" style={{
            width: window.innerWidth * 0.8,
        }} cols={(window.matchMedia('(max-width:768px)').matches ? 1 : 3)} gap={8}>
            {
                posts.map(image =>{
                    return <ImageListItem key={image._id}>
                        <Picture image={image}  />
                    </ImageListItem>
                })
            }
        </ImageList>
    </div>:
        search ?
        <div className='no-images'>
            <p>No images found!</p>
            <AiFillCaretLeft style={{
                cursor: 'pointer'
            }} size={50}  onClick={()=>{
                navigate('/');
            }}
            />
        </div>
        : null
  )
}

export default connect((state)=> {
    return {
        posts: state.postsReducer
    }
}, null)(Catalog);