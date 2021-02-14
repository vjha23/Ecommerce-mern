import React, { useState } from 'react'
import './index.css'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen';
import ProductScreen from './Components/ProductScreen';
import CartScreen from './Components/CartScreen';
import { useSelector, useDispatch } from 'react-redux';
import SigninScreen from './Components/SigninScreen';
import { signout } from './actions/userActions';
import RegisterScreen from './Components/RegisterScreen';
import ShippingAddressScreen from './Components/ShippingAddressScreen';
import PaymentMethodScreen from './Components/PaymentMethodScreen';
import PlaceOrderScreen from './Components/PlaceOrderScreen';
import OrderScreen from './Components/OrderScreen';

function App() {
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart
  // const userSignIn = useSelector((state) => state.userSignIn)
  // const { userInfo } = userSignIn;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const signOutHandler = () => {
    dispatch(signout());
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className='row'>
          <div>
            <Link className='brand' to='/'>Amazon</Link>
          </div>
          <div>
            <Link to={`/`} className='header__links' >Cart
             {cartItems.length > 0 && (
                <span className='badge'>{cartItems.length}</span>
              )}

            </Link>
            {userInfo ? (
              <div className='dropdown'>
                <Link to='#' className='dropdown-item'>
                  {userInfo.name} <i className='fa fa-caret-down'></i>{' '}
                </Link>
                <ul className='dropdown-content'>
                  <li>
                    <Link className='dropdown-item' to='#signout' onClick={signOutHandler}> Logout</Link>
                  </li>
                </ul>
              </div>
            ) : (
                <Link to='/signin' className='header__links'>Sign In</Link>
              )}
          </div>
        </header>

        <main>

          <Route path='/' component={HomeScreen} exact></Route>

          <Route path='/product/:id' component={ProductScreen}></Route>

          <Route path='/cart/:id' component={CartScreen}></Route>

          <Route path='/signin' component={SigninScreen}></Route>

          <Route path='/register' component={RegisterScreen}></Route>

          <Route path='/shipping' component={ShippingAddressScreen}></Route>

          <Route path='/payment' component={PaymentMethodScreen}></Route>

          <Route path='/placeorder' component={PlaceOrderScreen}></Route>

          <Route path='/order/:id' component={OrderScreen}></Route>

        </main>

        <footer className='row center'>
          All Right Reserved
      </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
