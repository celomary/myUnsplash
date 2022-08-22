import React from 'react'
import '../styles/Post.css';
const Post = ({post, setImage}) => {
  return (
    <div className='Post'>
        <img src={post.url} alt='post pic' className='Post'/>
        <div className='postDetail'>
            <div className='postBtnsContainer'>
                <div className='postBtn' onClick={
                    ()=>{
                        setImage(post);
                    }
                }>
                    <p>Delete</p>
                </div>
            </div>
            <div className='postLabel'>
                    <p className='PostTitle'>{post.label}</p>
            </div>
        </div>
    </div>
  )
}

export default Post;