import React, { useEffect, useState } from 'react'
import Rating from './Rating'
import LoadingBox from './LoadingBox';
import { Link } from 'react-router-dom'
import '../index.css'
import { useDispatch, useSelector } from 'react-redux'
import { detailsProduct } from '../actions/productActions'
import ErrorBox from './ErrorBox';

function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;
    const [qty, setQty] = useState(1)

    useEffect(() => {
        dispatch(detailsProduct(productId))
    }, [dispatch, productId])

    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`)
    }
    return (
        <div>
            {
                loading ?
                    (<LoadingBox />)
                    : error ? (
                        <ErrorBox variant='danger'>{error}</ErrorBox>
                    )
                        : (
                            <div>
                                <Link to='/'>Back to results</Link>
                                <div className='row top'>
                                    <div className='col-2'>
                                        <img className='large' src={product.image} alt={product.name} />
                                    </div>

                                    <div className='col-3'>
                                        <ul>
                                            <li>
                                                <h1>{product.name}</h1>
                                            </li>
                                            <li>
                                                <Rating rating={product.rating} numReviews={product.numReviews} />
                                            </li>
                                            <li>
                                                Price: ${product.price}
                                            </li>
                                            <li>
                                                Description:<p>{product.description}</p>

                                            </li>
                                        </ul>
                                    </div>

                                    <div className='col-1'>
                                        <div className='card card-body'>
                                            <ul>
                                                <li>
                                                    <div className='row price__stock'>
                                                        <div>Price</div>
                                                        <div className='price'>${product.price}</div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className='row price__stock'>
                                                        <div>Status</div>
                                                        <div className='price'>
                                                            {product.countInStock > 0 ?
                                                                <span className='success'>In Stock</span>
                                                                :
                                                                <span className='danger'>Out Of Stock</span>
                                                            }
                                                        </div>
                                                    </div>
                                                </li>

                                                {product.countInStock > 0 && (
                                                    <React.Fragment>
                                                        <li>
                                                            <div className='row'>
                                                                <div>Qty</div>
                                                                <div>
                                                                    <select
                                                                        value={qty}
                                                                        onChange={(e) => setQty(e.target.value)}
                                                                    >
                                                                        {[...Array(product.countInStock).keys()].map(
                                                                            (x) => (
                                                                                <option key={x + 1} value={x + 1}>
                                                                                    {x + 1}
                                                                                </option>
                                                                            )
                                                                        )}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <button
                                                                onClick={addToCartHandler}
                                                                className='primary'
                                                            > Add to cart</button>
                                                        </li>
                                                    </React.Fragment>
                                                )}

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
            }

        </div>
    )
}

export default ProductScreen
