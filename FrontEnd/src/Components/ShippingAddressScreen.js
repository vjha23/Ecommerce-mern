import React, { useState } from 'react'
import CheckoutSteps from './CheckoutSteps'
import { useSelector, useDispatch } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';

function ShippingAddressScreen(props) {
    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo } = userSignin;
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    if (!userInfo) {
        props.history.push('/signin');
    }
    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postCode, setPostalCode] = useState(shippingAddress.postCode);
    const [country, setCountry] = useState(shippingAddress.country);

    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ fullName, address, city, postCode, country }));
        props.history.push('/payment');
    }
    return (
        <div>
            <CheckoutSteps step1 step2 ></CheckoutSteps>
            <form className='form' onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Address</h1>
                </div>
                <div>
                    <label htmlFor='fullName'>Full Name</label>
                    <input
                        type='text'
                        id='fullName'
                        placeholder='Enter Full Name'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    ></input>
                </div>

                <div>
                    <label htmlFor='address'>Address</label>
                    <input
                        type='text'
                        id='address'
                        placeholder='Enter Address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    ></input>
                </div>

                <div>
                    <label htmlFor='city'>City</label>
                    <input
                        type='text'
                        id='city'
                        placeholder='Enter City'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    ></input>
                </div>

                <div>
                    <label htmlFor='postalCode'>Postal Code</label>
                    <input
                        type='text'
                        id='postalCode'
                        placeholder='Enter Postal Code'
                        value={postCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                    ></input>
                </div>

                <div>
                    <label htmlFor='country'>Country</label>
                    <input
                        type='text'
                        id='country'
                        placeholder='Enter Country'
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    ></input>
                </div>

                <div>
                    <label></label>
                    <button className='primary' type='submit'>
                        Continue
                </button>
                </div>
            </form>
        </div>
    )
}

export default ShippingAddressScreen
