import React, { useState } from 'react'
import Rating from 'react-rating'
import { useDispatch, useSelector } from 'react-redux'
import { addProductReview } from '../actions/productAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Review({ product }) {
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')
    const dispatch = useDispatch()

    const submitReview = () => {

        const currentUser = JSON.parse(localStorage.getItem('currentUser'))
        var reviewExists;
        for (var i = 0; i < product.reviews.length; i++) {
            if (product.reviews[i].userid == currentUser._id)
                reviewExists = true;
        }

        if (reviewExists) {
            toast.error("Item Already reviewed can't review again!!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2500,
                theme: "colored"
            });
        } else {
            const review = {
                rating: rating,
                comment: comment
            }
            dispatch(addProductReview(review, product._id))
            toast.success("Item reviewed successfully!", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2500,
                theme: "colored"
            });
        }

    }

    return (
        <div>
            <h3 className='text-center'>Reviews Section</h3>
            <br />
            <h4>Give your review</h4>
            <br />
            <Rating
                style={{ color: 'orange' }}
                initialRating={rating}
                fullSymbol="fa-solid fa-star"
                emptySymbol="fa-regular fa-star"
                onChange={e => setRating(e)}
            />
            <br />
            <div className="col-md-6">

                <input type="text" placeholder='Enter comment' className='form-control mt-3' value={comment} onChange={e => setComment(e.target.value)} />
                <br />
                <button onClick={submitReview} className='btn btn-dark'>Submit Review</button>
            </div>
            <br />
            <br />
            <h4 className='my-4'>All Reviews</h4>
            {
                product.reviews.length > 0 ? (
                    product.reviews.map(review => {
                        return <div>
                            <p>{review.name}</p>
                            <Rating
                                style={{ color: 'orange' }}
                                initialRating={review.rating}
                                fullSymbol="fa-solid fa-star"
                                emptySymbol="fa-regular fa-star"
                                readonly
                            />
                            <p>{review.comment}</p>
                        </div>

                    })
                ) : (
                    <p>No reviews yet.</p>
                )
            }
            <ToastContainer />

        </div>
    )
}

export default Review