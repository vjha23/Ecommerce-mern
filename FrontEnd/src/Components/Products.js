import React from 'react'
import Rating from './Rating';
import { Link } from 'react-router-dom';

function Products(props) {
    const { product } = props;
    return (
        <div key={product._id} className='card'>
            <div className='image__back row center'>
                <Link to={`/product/${product._id}`}>
                    <img className='medium' src={product.image} alt={product.name} />
                </Link>

            </div>
            <div className='card__body__center'>
                <div className='card-body'>
                    <Link to={`/product/${product._id}`} > <h2>{product.name}</h2> </Link>
                    <Rating rating={product.rating} numReviews={product.numReviews} />
                    <div className="price">${product.price}</div>
                </div>

            </div>
        </div>
    )
}

export default Products
