import React from 'react'

function Footer() {
    return (
        <div>
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-3">
                            <h4 class="title" style={{ marginLeft: "20px" }}>Sumi</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin suscipit, libero a molestie consectetur, sapien elit lacinia mi.</p>
                            <ul class="social-icon">
                                <a href="#" class="social"><i className="fa-brands fa-facebook" aria-hidden="true"></i></a>
                                <a href="#" class="social"><i class="fa-brands fa-twitter" aria-hidden="true"></i></a>
                                <a href="#" class="social"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
                                <a href="#" class="social"><i class="fa-brands fa-youtube-play" aria-hidden="true"></i></a>
                                <a href="#" class="social"><i class="fa-brands fa-google" aria-hidden="true"></i></a>
                            </ul>
                        </div>
                        <div class="col-sm-3">
                            <h4 class="title" style={{ marginLeft: "40px" }}>My Account</h4>
                            <span class="acount-icon">
                                <a href="#"><i class="fa fa-heart" aria-hidden="true"></i> Wish List</a>
                                <a href="#"><i class="fa fa-cart-plus" aria-hidden="true"></i> Cart</a>
                                <a href="#"><i class="fa fa-user" aria-hidden="true"></i> Profile</a>
                                <a href="#"><i class="fa fa-globe" aria-hidden="true"></i> Language</a>
                            </span>
                        </div>
                        <div class="col-sm-3">
                            <h4 class="title" style={{ marginLeft: "20px" }}>Category</h4>
                            <div class="category">
                                <a href="#">men</a>
                                <a href="#">women</a>
                                <a href="#">boy</a>
                                <a href="#">girl</a>
                                <a href="#">bag</a>
                                <a href="#">teshart</a>
                                <a href="#">top</a>
                                <a href="#">shos</a>
                                <a href="#">glass</a>
                                <a href="#">kit</a>
                                <a href="#">baby dress</a>
                                <a href="#">kurti</a>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <h4 class="title">Payment Methods</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <ul class="payment">
                                <li><a href="#"><i class="fa-brands fa-cc-amex" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa fa-credit-card" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-cc-paypal" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-cc-visa" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="text-center"> © 2022. Made with <i class="fa fa-heart"></i> by Abhishek.</div>
                </div>


            </footer>
        </div>
    )
}

export default Footer