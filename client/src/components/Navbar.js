import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
function Navbar() {
    const cartreducer = useSelector(state => state.cartReducer)
    const { cartItems } = cartreducer
    return (
        <div>
            <nav className="navbar bgcolor navbar-expand-lg navbar-light p-3">
                <a className="navbar-brand text-white bold" href="/">Ab Shop</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item ">
                            <Link className="nav-link text-white" to="/">Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link text-white" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/cart"><i class="fa-solid p-1 fa-cart-shopping"></i>{cartItems.length}
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar