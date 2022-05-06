import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../actions/userAction'
function Register() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    const [cpass, setcpass] = useState('')

    const dispatch = useDispatch()
    const registerSubmit = (e) => {
        e.preventDefault()
        const user = {
            name: name,
            email: email,
            pass: pass
        }
        if (pass == cpass) {
            dispatch(registerUser())

        } else {
            alert('Passwords doesnt match')
        }

    }

    return (
        <div className='row bgcolor p-5'>
            <div className="col-md-6 text-center py-5">
                <img className='img-class img-fuild' src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=996&t=st=1651744935~exp=1651745535~hmac=d4f6d78ec33831fc619d1d3eee3555a57f64a8ac5e700f2a0c17cc4942d50d2d" alt="" />
            </div>
            <div className="col-md-4">
                <div className="card p-2 bg-white">
                    <h2 className='mt-2' style={{ textAlign: "left", marginLeft: "40px" }}>Register</h2>
                    <form className='col-md-9 mt-5' onSubmit={registerSubmit} style={{ textAlign: "left", marginLeft: "40px" }}>
                        <div className="form-group">
                            <h5>Name</h5>
                            <input type="text" value={name} onChange={(e) => setname(e.target.value)} className="form-control" placeholder="Enter name" required />
                        </div>
                        <div className='form-group mt-4'>
                            <h5>Email address</h5>
                            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" placeholder="Enter email" required />
                        </div>
                        <div className="form-group mt-4">
                            <h5>Password</h5>
                            <input type="password" value={pass} onChange={(e) => setpass(e.target.value)} className="form-control" placeholder="Password" required />
                        </div>
                        <div className="form-group mt-4">
                            <h5>Confirm Password</h5>
                            <input type="password" value={cpass} onChange={(e) => setcpass(e.target.value)} className="form-control" placeholder="Confirm Password" required />
                        </div>
                        <button type="submit" className="submit-btn mt-5">Submit</button>

                    </form>
                    <Link className="text-primary my-3" to="/login">Already Registered? Click here</Link>
                </div>
            </div>
        </div>
    )
}

export default Register