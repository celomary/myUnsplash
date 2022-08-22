import React, {useState} from 'react'
import '../styles/Register.css';
import {Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { createUser } from '../services/api/users';
const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, watch } = useForm(
        {
            mode: 'onChange'
        }
    );
    const [exist, setExist] = useState(false);
    const addUser  = async (username, password) => {
        const res = await createUser(username, password);
        if (res.status === 201){
            navigate('/login');
        }
        else 
        {
            setExist(true);
        }
    }
    const onSubmit = (data)=>{
        console.log(data);
        addUser(data.username, data.password);
    }
  return (
    <div className='Register'>
        <div className='RegisterLeft'>
            <img src='https://source.unsplash.com/g0gHGCAMclI' alt='Register' />
            <div className='RegisterLeftS'>
                <div className='registerLogo' onClick={
                    ()=>{
                        navigate('/');
                    }
                }>
                    <img src='https://unsplash.com/assets/core/logo-white-8962708214629a3e8f9fbf5b87b70c3ace41c4175cbcc267f7fbb8449ac45bdd.svg'
                        alt='Logo' className='logo'/>
                </div>
                <div className='RegisterLeftSText'>
                    <h2 className='RegistrationLeftTitle'>Creation starts here</h2>
                    <p className='RegistrationLeftSubTitle'>Access 4,153,185 free, high-resolution photos you can’t find anywhere else</p>
                </div>
            </div>
        </div>
        <div className='RegisterRight'>
            <div className='RegisterRightText'>
                <h1>Join Unsplash</h1>
                <p>Already have an account? <Link className='loginLink' to='/login'>Login</Link></p>
            </div>
           
            <div className='RegisterForm'>
                {exist ? <code style={{
                    textAlign: 'center',
                    color: '#D63301'
                }}>username already exist</code> : null }
                <div className='inputTextControl'>
                    <label htmlFor='username'>
                        Username <span className='RegisterInformation'>(only letters, numbers, underscores, min 6 chars)</span>
                    </label>
                    <input type='text' id='username' {...register('username', {
                        required: true,
                        minLength: {
                            value: 6,
                        },
                        pattern: /^[a-zA-Z0-9_]{6,}$/
                    })} />
                    <code>{ errors.username ? 'Invalid username' : '' }</code>
                </div>
                <div className='inputTextControl'>
                    <label htmlFor='password'>
                        Password <span className='RegisterInformation'>(min 8 chars)</span>
                    </label>
                    <input type='password' id='password' {...register('password', {
                        required: true,
                        minLength: 8,
                    })} />
                    <code>{errors.password ? 'Inavlid password' : ''}</code>
                </div>
                <div className='inputTextControl'>
                    <label htmlFor='rpassword'>
                       Repeat password
                    </label>
                    <input type='password' id='rpassword' {...register('rpassword', {
                        validate: (val)=> {
                            return val !== watch('password') ? 'Passwords must match' : true;
                        }
                    })} />
                    <code>{errors.rpassword ? errors.rpassword.message : ''}</code>
                </div>
                <div className='RegisterBtn' onClick={handleSubmit(onSubmit)}>
                    Join
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register;