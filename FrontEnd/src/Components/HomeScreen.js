import React, { useState, useEffect } from 'react'
import Products from './Products';
import LoadingBox from './LoadingBox';
import ErrorBox from './ErrorBox';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
function HomeScreen(props) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList
    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo } = userSignin;

    if (!userInfo) {
        props.history.push('/signin');
    }
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return (
        <div>
            {loading ? <LoadingBox />
                :
                error ? <ErrorBox variant='danger'>{error}</ErrorBox>
                    :
                    (
                        <div className='row center'>
                            {products.map(product => (
                                <Products key={product._id} product={product} />
                            ))}
                        </div>
                    )
            }

        </div>
    )
}

export default HomeScreen
