import axios from "axios"

export const placeOrder = (token, subtotal) => (dispatch, getState) => {

    const currentUser = getState().loginUserReducer.currentUser
    const demoItems = getState().cartReducer.cartItems

    const cartItems = new Array();

    for (var i = 0; i < demoItems.length; i++) {
        var item = {
            name: demoItems[i].name,
            quantity: demoItems[i].quantity,
            price: demoItems[i].price,
            _id: demoItems[i]._id
        }

        cartItems.push(item)
    }

    dispatch({ type: "PLACE_ORDER_REQUEST" })

    axios.post("/api/orders/placeorder/", { token, subtotal, currentUser, cartItems }).then(res => {
        dispatch({ type: "PLACE_ORDER_SUCCESS" })
        window.location.reload()
        console.log(res);
    }).catch(err => {
        dispatch({ type: "PLACE_ORDER_ERROR" })
    })
}

export const getOrdersByUserId = () => (dispatch, getState) => {
    const userid = getState().loginUserReducer.currentUser._id
    dispatch({ type: 'GET_ORDERSBYUSERID_REQUEST' })

    axios.post("/api/orders/getordersbyuserid/", { userid: userid })
        .then(res => {
            dispatch({ type: 'GET_ORDERSBYUSERID_SUCCESS', payload: res.data })
            console.log(res.data);
            console.log(userid);
        })
        .catch(err => {
            dispatch({ type: 'GET_ORDERSBYUSERID_ERROR', payload: err })

        })
}

export const getOrderById = (orderid) => (dispatch, getState) => {
    dispatch({ type: 'GET_ORDERBYID_REQUEST' })

    axios.post("/api/orders/getorderbyid/", { orderid: orderid })
        .then(res => {
            dispatch({ type: 'GET_ORDERBYID_SUCCESS', payload: res.data })
            console.log(res.data);
        })
        .catch(err => {
            dispatch({ type: 'GET_ORDERBYID_ERROR', payload: err })

        })
}