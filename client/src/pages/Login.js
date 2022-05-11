import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../actions/userAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    const dispatch = useDispatch()
    const loginsubmit = (e) => {
        e.preventDefault()
        const user = {
            email: email,
            pass: pass
        }
        dispatch(loginUser(user))
        toast.success("Success Notification !", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2500,
            theme: "colored"
        });

    }

    useEffect(() => {
        if (localStorage.getItem('currentUser'))
            window.location.href = '/'
    }, [])
    return (
        <div className='row bgcolor px-5 pt-5'>
            <h2 className='text-white pb-1'>Welcome to trending E-commerce</h2>
            <div className="col-md-6 text-center py-4">
                <img className='img-class img-fuild' src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=996&t=st=1651744935~exp=1651745535~hmac=d4f6d78ec33831fc619d1d3eee3555a57f64a8ac5e700f2a0c17cc4942d50d2d" alt="" />
            </div>
            <div className="col-md-4 py-5 mt-3">
                <div className="card p-2 bg-white">
                    <h2 className='mt-2' style={{ textAlign: "left", marginLeft: "40px" }}>Login</h2>
                    <form onSubmit={loginsubmit} className='col-md-9 mt-5' style={{ textAlign: "left", marginLeft: "40px" }}>
                        <div className="form-group">
                            <h5>Email address</h5>
                            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" placeholder="Enter email" autoFocus />
                        </div>
                        <div className="form-group mt-4">
                            <h5>Password</h5>
                            <input type="password" value={pass} onChange={(e) => setpass(e.target.value)} className="form-control" placeholder="Password" />
                        </div>

                        <button type="submit" className="submit-btn mt-5">Submit</button>
                        <br />

                    </form>
                    <Link className="text-primary my-3" to="/register">Not Registered? Click here</Link>
                </div>
                <ToastContainer />
            </div>
            <footer className='p-3 text-white'>
                <h5>Made with ❤️ @Abhishek</h5>

            </footer>
        </div>
    )
}

export default Login