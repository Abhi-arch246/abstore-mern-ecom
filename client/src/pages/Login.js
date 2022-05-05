import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <div className='row bgcolor p-5'>
            <h2 className='text-white pb-1'>Welcome to trending E-commerce</h2>
            <div className="col-md-6 text-center py-5">
                <img className='img-class img-fuild' src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=996&t=st=1651744935~exp=1651745535~hmac=d4f6d78ec33831fc619d1d3eee3555a57f64a8ac5e700f2a0c17cc4942d50d2d" alt="" />
            </div>
            <div className="col-md-4 py-5 mt-3">
                <div className="card p-2 bg-white">
                    <h2 className='mt-2' style={{ textAlign: "left", marginLeft: "40px" }}>Login</h2>
                    <form className='col-md-9 mt-5' style={{ textAlign: "left", marginLeft: "40px" }}>
                        <div class="form-group">
                            <h5>Email address</h5>
                            <input type="email" class="form-control" placeholder="Enter email" />
                        </div>
                        <div class="form-group mt-4">
                            <h5>Password</h5>
                            <input type="password" class="form-control" placeholder="Password" />
                        </div>
                        <button type="submit" class="submit-btn mt-5">Submit</button>
                        <br />

                    </form>
                    <Link className="text-primary my-3" to="/register">Not Registered? Click here</Link>
                </div>
            </div>
        </div>
    )
}

export default Login