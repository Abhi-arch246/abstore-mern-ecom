import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrdersByUserId } from '../actions/orderAction'
import order from '../assets/order.png'
function OrderPage() {

    const orderstate = useSelector(state => state.getOrdersByUserIdReducer)

    const { orders, error, loading } = orderstate

    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            dispatch(getOrdersByUserId())
        } else {
            window.location.href = '/login'
        }
    }, [dispatch])
    return (
        <div>
            <div className="row justify-content-center">
                <h3 className='my-5'>Orders Section</h3>
                <div className="col-md-8">
                    <table className='table table-hover table-responsive-sm'>
                        <thead>
                            <th scope='col'>Amount</th>
                            <th scope='col'>Order ID</th>
                            <th scope='col'>Date</th>
                            <th scope='col'>Transaction ID</th>
                            <th scope='col'>Status</th>
                        </thead>
                        <tbody>
                            {loading && <img src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" alt="" />}
                            {orders && orders.map(order => {
                                return <tr style={{ cursor: 'pointer' }} onClick={() => window.location = `/orderdesc/${order._id}`}>
                                    <td>{order._id}</td>
                                    <td>{order.orderAmount}</td>
                                    <td>{order.createdAt.substring(0, 10)}</td>
                                    <td>{order.transactionId}</td>
                                    <td>{order.isDelivered ? (<li>Delivered</li>) : (<li>Order Placed</li>)}</td>
                                </tr>

                            })}
                            {error && <h2>Something went wrong...</h2>}
                        </tbody>
                    </table>

                </div>
                <img src={order} className="my-2 img-fluid img-class" alt="" />
            </div>
        </div >
    )
}

export default OrderPage