import React, {useState, useRef, useEffect} from 'react';
import '../styles/Profile.css';
import { AiOutlineCaretLeft, AiOutlinePlus } from 'react-icons/ai';
import { ImageList, ImageListItem } from '@mui/material';
import Button from '../components/Button';
import Post from '../components/Post';
import Avatar from 'react-avatar-edit';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { userAddPost, userInfo, userPosts, userDeletePost, userImageUpdate } from '../services/api/users';
import userPic from '../assets/images/user.png';
import { useForm } from 'react-hook-form';

const Profile = () => {
  const [user, setUser] = useState({});
  const [posts, setsPosts] = useState([]);
  const [imageToDelete, setImageToDelete] = useState(null);
  const [choosed, setChoosed] = useState("");
  const [preview, setPreview] = useState(null);
  const [update, setUpdated] = useState(false);
  const popupRef = useRef(null);
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();
  useEffect(()=>{
    if (imageToDelete) {
        popupRef.current.style.display = 'flex';
    }
    else {
        popupRef.current.style.display = 'none';
    }
  }, [imageToDelete]);

  useEffect(()=>{
    const getUser = async () => {
        const res = await userInfo();
        setUser(res);
    }
    const getPosts = async () => {
        const res = await userPosts();
        setsPosts(res);
    }
    getUser();
    getPosts();
  }, [update]);

  const addPost = async (label, url) => {
    const res = await userAddPost(label, url);
    setUpdated(state => !state);
    reset({
        label: '',
        url: ''
    })
  }
  const deletePost = async (id) => {
        const res = await userDeletePost(id);
        setUpdated(state => !state);
  }

  const updatePicture = async ()=> {
    const  res = await userImageUpdate(preview);
    setUpdated(state => !state);
  }
    const onSubmit =  (data)=>{
        addPost(data.label, data.url);
        document.querySelector('.popupAddPost').style.display = 'none';
    }
  const onCorp = (prev) => {
    setPreview(prev);
  }
  const onClose = () => {
    setPreview(null);
  }
  return (
    <div className='Profile'>
        <Header hide />
        <div className='Back'>
            <div className='Back__btn' onClick={()=> {
                navigate('/');
            }}>
                <AiOutlineCaretLeft />
                <p>Back</p>
            </div>
        </div>
        <div className='UserPart'>
            <div className='ProfilePicContainer'>
                <div className="ProfilePic">
                    <img src={user.picture ? user.picture : userPic} alt='Profile' />
                    <div className='editPics' onClick={
                        ()=>{
                            document.querySelector('.popupProfile').style.display = 'flex';
                        }
                    }>
                        <AiOutlinePlus style={{
                            color: '#f0f0f0',
                            fontSize: '20px'
                        }}/>
                    </div>
                </div>
            </div>
            <h2 className='profileUsername'>{user.username}</h2>
            <Button onClick={()=>{
                document.querySelector('.popupAddPost').style.display = 'flex';
            }}/>
        </div>
        <div className='posts'>
            <h2 className='postsTitle'>Posts</h2>
            {posts.length == 0 ? <p className='no_post'>No posts!!</p>: null}
            <div className='posts__container'>
            <ImageList variant="masonry" cols={(window.matchMedia('(max-width:768px)').matches ? 1 : 3)} gap={8} sx={{
                width: window.innerWidth * 0.8,
                marginTop: '40px',
                marginBottom: '40px'
            }}>
                {posts.map((post) => (
                    <ImageListItem key={post._id}>
                        <Post post={post} setImage={setImageToDelete}/>
                    </ImageListItem>
                ))}
            </ImageList>
            </div>
        </div>
        <div className='popup' ref={popupRef} >
            <div className='popup__container'>
                    <p>Are you sure you want to delete this picture?</p>
                    <img src={imageToDelete?.url} alt='Profile' />
                    <div className='popup__btns'>
                        <div className='popup_btn popup__yes' onClick={
                            () => {
                                if (imageToDelete) {
                                    deletePost(imageToDelete._id);
                                }
                                setImageToDelete(null);
                            }
                        }>
                            <p>Yes</p>
                        </div>
                        <div className='popup_btn popup__no' onClick={
                            ()=>{
                                setImageToDelete(null);
                            }
                        }>
                            <p>No</p>
                        </div>
                    </div>
            </div>
        </div>
        <div className='popupProfile'>
            <div className='popupProfile__container'>
                    <p>Add Picture</p>
                    <Avatar
                        width={200}
                        height={200}
                        src={choosed}
                        onCrop={onCorp}
                        onClose={onClose}
                    />
                    <div className='popupProfile__btns'>
                        <div className='popupProfile_btn popupProfile__save' style={{
                            backgroundColor: preview ? 'var(--primary-color)' : '#f5f5f5',
                            cursor: preview ? 'pointer' : 'not-allowed',
                            color: preview ? '#f0f0f0' : '#777'
                        }} onClick={
                            ()=>{
                                    updatePicture();
                                    setPreview(null);
                                    setChoosed('');
                                    document.querySelector('.popupProfile').style.display = 'none';
                            }
                        }>
                            <p>Save</p>
                        </div>
                        <div className='popupProfile_btn popupProfile__cancel' onClick={
                            ()=>{
                                
                                setPreview(null);
                                document.querySelector('.popupProfile').style.display = 'none';
                            }
                        }>
                            <p>Cancel</p>
                        </div>
                    </div>
            </div>
        </div>
        <div className='popupAddPost'>
            <div className='popupAddPost__container'>
                        <h2>Add a new photo</h2>
                        <div className='inputController'>
                            <label htmlFor='label'>label</label>
                            <input type='text' id='label' {...register('label', {
                                required: true
                            })}/>
                        </div>
                        <div className='inputController'>
                            <label htmlFor='url'>Photo URL</label>
                            <input type='text' id='url' {...register('url', {
                                required: true,
                            })}/>
                        </div>
                        <div className='popupAddPost__btns'>
                            <div className='popupAddPost_btn popupAddPost__cancel'
                            onClick={()=>{
                                document.querySelector('.popupAddPost').style.display = 'none';
                            }}>
                                <p>Cancel</p>
                            </div>
                            <div className='popupAddPost_btn popupAddPost__save' onClick={handleSubmit(onSubmit)}>
                                <p>Save</p>
                            </div>
                        </div>
            </div>
        </div>
    </div>
  )
}

export default Profile;