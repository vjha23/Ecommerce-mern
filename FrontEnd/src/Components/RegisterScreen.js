import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import LoadingBox from './LoadingBox';
import ErrorBox from './ErrorBox';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';

function RegisterScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');

    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';

    const userRegister = useSelector((state) => state.userRegister)
    const { userInfo, loading, error } = userRegister;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmedPassword) {
            alert('Password and Confirmed Password are not match')
        } else {
            dispatch(register(name, email, password))
        }
    }

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo])

    return (
        <div>
            <form className='form' onSubmit={submitHandler}>
                <div>
                    <h1>Create Account</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <ErrorBox>{error}</ErrorBox>}
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        placeholder='Enter Name'
                        required
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>

                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        placeholder='Enter Email'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        placeholder='Enter Password'
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>

                <div>
                    <label htmlFor='confirmedPassword'>Confirmed Password</label>
                    <input
                        type='password'
                        id='confirmedPassword'
                        placeholder='Enter Confirmed Password'
                        required
                        onChange={(e) => setConfirmedPassword(e.target.value)}
                    ></input>
                </div>

                <div>
                    <label></label>
                    <button className='primary' type='submit'>
                        Register
                    </button>
                </div>

                <div>
                    <label></label>
                    <div>
                        Already Have An Account?{' '}
                        <Link to={`/signin?redirect=${redirect}`}>Login</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterScreen
