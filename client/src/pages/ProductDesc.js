import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../actions/productAction'
import { addToCart } from '../actions/cartAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Review from '../components/Review'

function ProductDesc() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)
    const getproductbyidstate = useSelector((state) => state.getAllProductByIdReducer)
    const { loading, product, error } = getproductbyidstate
    useEffect(() => {
        dispatch(getProductById(id))
    }, [])

    function addtocart() {
        dispatch(addToCart(product, quantity))
        toast.success("Item Added to the cart!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
            theme: "colored"
        });
    }
    return (
        <div>

            {loading ?
                (
                    <img src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" alt="" />
                )
                : error ? (
                    <h1>something is wrong</h1>
                ) : (
                    <div className="row">
                        <div className="col-md-6 p-4">
                            <h2 className='p-3'>{product.name}</h2>
                            <img className='rounded' src={product.image} width="520" height="650" alt="" />
                        </div>
                        <div className="col-md-6" style={{ textAlign: 'left' }}>
                            <div className="mt-4">
                                <h4>Price: {product.price}</h4>
                                <br />
                                <h4>Select Quantity</h4>
                                <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                                    {[...Array(product.countInStock).keys()].map((c, i) => {
                                        return <option value={i + 1}>{i + 1}</option>
                                    })}

                                </select>
                                <br />
                                <button className='btn btn-dark mt-4' onClick={addtocart}>Add to Cart</button>
                            </div>
                            <Review product={product} />

                        </div>
                    </div>
                )
            }
            <ToastContainer />

        </div>
    )
}

export default ProductDesc