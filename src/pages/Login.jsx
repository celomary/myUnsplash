import React, {useState} from 'react'
import '../styles/Login.css';
import {
    Link,
    useNavigate
} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { login } from '../services/auth/auth.services';
const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm(
    {
        mode: 'onChange'
    }
  );

  const onSubmit = async (data)=>{
    if (await login(data.username, data.password)){
        setForbidden(false);
        navigate('/profile');
    }
    else
    {
        setForbidden(true);
    }
  }

  const [forbidden, setForbidden] = useState(false);

  return (
    <div className='Login'>
        <div className='Image' style={{
            cursor: 'pointer'
        }} onClick={()=>{
            navigate('/');
        }}>
            <img src='https://unsplash.com/assets/core/logo-black-df2168ed0c378fa5506b1816e75eb379d06cfcd0af01e07a2eb813ae9b5d7405.svg' alt='Unsplash logo' />
        </div>
        <div className='LoginHeaders'>
            <h1>Login</h1>
            <p>Welcome back.</p>
        </div>
        <div className='LoginFormInput'>
            {forbidden ? <code>Invalid username or password</code> : null }
            <div className='inputController'>
                <label htmlFor='username' >Username</label>
                <input style={{
                    border: errors?.username ? '1px solid red' : '1px solid #ccc'
                }} type='text' id="username" {...register('username', {
                    required: true,
                    minLength: {
                        value: 6,
                    }
                })}/>
            </div>
            <div className='inputController'>
                <label htmlFor='password' >Password</label>
                <input style={{
                    border: errors?.password ? '1px solid red' : '1px solid #ccc'
                }} type='password' id='password' {...register('password', {
                    required: true,
                    minLength: {
                        value: 8,
                    }
                })}/>
            </div>
            <div className='LoginBtn' onClick={handleSubmit(onSubmit)}>
                Login
            </div>
        </div>
        <div className='registerPageLink'>
            <p>Don't have an account ? <Link to='/register' >Join MyUnsplash</Link></p>
        </div>
    </div>
  )
}

export default Login