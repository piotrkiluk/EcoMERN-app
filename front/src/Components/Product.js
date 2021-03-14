import React from 'react';
import Rating from './Rating';

export default function Product({product}) {
    const { _id, name, image, price, rating, numReviews } = product;
    return (
        <div key={_id} className="card">
            <a href={`/product/${_id}`}>
                <img 
                className="medium" 
                src={image} 
                alt={name}
                />
            </a>
            <div className="card-body">
                <a href={`/product/${_id}`}>
                    <h2>{name}</h2>
                </a>
                <Rating 
                    rating={rating} 
                    numReviews={numReviews}
                ></Rating>
                <div className="price">{price} zł</div>
            </div>
        </div>
        )

}