import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../actions/userAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile() {
    const dispatch = useDispatch()

    return (
        <div>
            <div className='row'>
                <div className="col-md-12 p-4">
                    <li className='btn btn-danger rounded mt-2 float-end' onClick={() => {
                        dispatch(logoutUser())
                        toast.error("Logged out!", {
                            position: toast.POSITION.TOP_RIGHT,
                            autoClose: 2500,
                            theme: "colored"
                        });
                    }}>Logout</li>

                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Profile