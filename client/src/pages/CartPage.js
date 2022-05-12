import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteItem } from '../actions/cartAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from '../components/Checkout';

function CartPage() {
    const cartreducerstate = useSelector(state => state.cartReducer)
    const { cartItems } = cartreducerstate
    var subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    const dispatch = useDispatch()

    return (
        <div>
            <h4 className='mt-4'>CART</h4>
            <div className="row mt-5 justify-content-center">
                <div className="col-md-8">
                    <table className='table table-stripped'>
                        <thead className='thead-dark'>
                            <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Price</th>
                                <th scope='col'>Quantity</th>
                                <th scope='col'>Total Price</th>
                                <th scope='col'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => {
                                return <tr>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <select value={item.quantity} onChange={(e) => dispatch(addToCart(item, e.target.value))}>
                                            {[...Array(item.countInStock).keys()].map((x, i) => {
                                                return <option value={i + 1}>{i + 1}</option>
                                            })}
                                        </select>
                                    </td>
                                    <td>{item.quantity * item.price}</td>
                                    <td> <button className='btn btn-danger' onClick={() => {
                                        dispatch(deleteItem(item));
                                        toast.error("Item deleted from the cart!", {
                                            position: toast.POSITION.TOP_RIGHT,
                                            autoClose: 2500,
                                            theme: "colored"
                                        });
                                    }}>Delete</button></td>
                                </tr>
                            })}
                        </tbody>

                    </table>

                    <h2 className='mt-5'>Subtotal: {subtotal}</h2>
                    <Checkout amount={subtotal} />
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default CartPage