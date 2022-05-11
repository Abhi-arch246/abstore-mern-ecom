import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../actions/userAction'
function Userbar() {
    const dispatch = useDispatch()

    return (
        <div>
            <div className='row'>
                <div className="col-md-12 ">
                    <li className='btn btn-danger rounded mt-3 float-end' onClick={() => { dispatch(logoutUser()) }}>Logout</li>

                </div>
            </div>
        </div>
    )
}

export default Userbar