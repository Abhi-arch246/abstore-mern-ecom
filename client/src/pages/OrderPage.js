import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrdersByUserId } from '../actions/orderAction'

function OrderPage() {

    const orderstate = useSelector(state => state.getOrdersByUserIdReducer)

    const { order, error, loading } = orderstate

    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            dispatch(getOrdersByUserId())
        } else {
            window.location.href = '/login'
        }
    }, [])
    return (
        <div>
            <div className="row justify-content-center">
                <h3 className='my-5'>Orders Section</h3>
                <div className="col-md-8">
                    <table className='table table-hover'>
                        <thead>
                            <th>Order ID</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Transaction ID</th>
                            <th>Status</th>
                        </thead>
                        <tbody>
                            {loading && <img src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" alt="" />}
                            {order && order.map(ord => {
                                return <tr>
                                    <td>{ord._id}</td>
                                    <td>{ord.orderAmount}</td>
                                    <td>{ord.createdAt.substring(0, 10)}</td>
                                    <td>{ord.transactionId}</td>
                                    <td>{ord.isDelivered ? (<li>Delivered</li>) : (<li>Order Placed</li>)}</td>

                                </tr>
                            })}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default OrderPage