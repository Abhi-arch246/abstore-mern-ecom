import axios from "axios"

export const placeOrder = (token, subtotal) => (dispatch, getState) => {

    const currentUser = getState().loginUserReducer.currentUser
    const cartItems = getState().cartReducer.cartItems

    dispatch({ type: "PLACE_ORDER_REQUEST" })

    axios.post("/api/orders/placeorder", { token, subtotal, currentUser, cartItems }).then(res => {
        dispatch({ type: "PLACE_ORDER_SUCCESS" })
    }).catch(err => {
        dispatch({ type: "PLACE_ORDER_ERROR" })
    })
}