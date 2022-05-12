import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

function Checkout({ amount }) {
    const tokenhandler = (token) => {
        console.log(token);
    }
    return (
        <div>
            <StripeCheckout
                token={tokenhandler}
                amount={amount * 100}
                shippingAddress
                currency='INR'
                stripeKey='pk_test_51KyfVaSJLir7fHVulZxhHssma3gmCzeGzOuavMBhjZjp3ExF4pMdH1HfZRmSJwIsgC6M1kkXLPl2dfz9EIqUFPrv00b8fuTkPj'

            >
                <button className='btn btn-dark m-5'>Checkout</button>

            </StripeCheckout>
        </div>
    )
}

export default Checkout