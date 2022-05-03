import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../actions/productAction'
import { addToCart } from '../actions/cartAction'
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
                        <div className="col-md-6">
                            <h2 className='p-3'>{product.name}</h2>
                            <img className='rounded' src={product.image} width="520" height="650" alt="" />
                        </div>
                        <div className="col-md-6" style={{ textAlign: 'left' }}>
                            <div className="mt-4">
                                <h3>Price: {product.price}</h3>
                                <br />
                                <h3>Select Quantity</h3>
                                <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                                    {[...Array(product.countInStock).keys()].map((c, i) => {
                                        return <option value={i + 1}>{i + 1}</option>
                                    })}

                                </select>
                                <br />
                                <button className='btn btn-dark mt-4' onClick={addtocart}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default ProductDesc