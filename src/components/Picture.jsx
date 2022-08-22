import React from 'react'
import '../styles/Picture.css';
import userPic from '../assets/images/user.png';
const Picture = ({image}) => {
  return (
    <div className='Picture'>
        <img src={image.url} alt='Image' />
        <div className='PictureDetail'>
            <div className='PictureTop'>
                <div className='Picture__user'>
                    <img src={image.user.picture ? image.user.picture : userPic} alt='user'/>
                    <p>{image.user.username}</p>
                </div>
            </div>
            <div className='PictureBottom'>
                <p>
                    {image.label}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Picture;