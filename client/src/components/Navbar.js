import React from 'react'
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
                            <a className="nav-link text-white" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/cart"><i class="fa-solid fa-cart-shopping"></i>{cartItems.length}
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar