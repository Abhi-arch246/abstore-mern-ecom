
export const addToCart = (product, quantity) => (dispatch, getState) => {

    const cartItem = {
        name: product.name,
        _id: product._id,
        price: product.price,
        countInStock: product.countInStock,
        quantity: quantity
    }

    dispatch({ type: "ADD_TO_CART", payload: cartItem })

    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems))


}

export const deleteItem = (item) => (dispatch, getState) => {
    dispatch({ type: "DELETE_ITEM", payload: item })
    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems))

}