import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../index.css'
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
import LoadingBox from './LoadingBox'
import ErrorBox from './ErrorBox'

function SigninScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;
    const dispatch = useDispatch();

    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password))
    }
    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect)
        }
    }, [props.history, redirect, userInfo])
    return (
        <div>
            <form className='form' onSubmit={submitHandler}>
                <div className='signin_tag'>
                    <h1><strong>Sign In</strong></h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <ErrorBox variant='danger'>{error}</ErrorBox>}
                <div>
                    <label htmlFor='email'>Email Address</label>
                    <input
                        type='email'
                        id='email'
                        value={email}
                        placeholder='Enter Email'
                        onChange={(e) => setEmail(e.target.value)}
                        required
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
                    >

                    </input>
                </div>

                <div>
                    <label></label>
                    <button className='primary' type='submit'>Sign In</button>
                </div>

                <div>
                    <label></label>
                    <div>
                        New Customer? {' '}
                        <Link to={`register?redirect=${redirect}`}>Create Your Account</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SigninScreen
